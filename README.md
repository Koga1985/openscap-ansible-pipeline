# OpenSCAP → Ansible Remediation Pipeline  
**Inventory-routed • Version-aware • Enterprise-ready**

> **BLUF:** This repo lets you scan hosts with **OpenSCAP**, auto-generate **Ansible remediation** from the scan results, apply those fixes safely, and re-scan to prove remediation. It also routes by inventory to apply **platform-specific baselines** for ESXi, Cisco IOS-XE, PAN-OS, and PowerFlex—automatically selecting the **current + last 2** major versions of each vendor’s baseline templates.

---

## Table of Contents
- [What This Does](#what-this-does)
- [Repo Layout](#repo-layout)
- [Requirements](#requirements)
- [Quick Start](#quick-start)
- [How It Works](#how-it-works)
  - [Inventory Routing](#inventory-routing)
  - [Version Support Policy](#version-support-policy)
  - [OpenSCAP → Ansible Flow (Linux)](#openscap--ansible-flow-linux)
  - [Vendor Pipelines (ESXi / Cisco / PAN-OS / PowerFlex)](#vendor-pipelines-esxi--cisco--pan-os--powerflex)
- [Artifacts & Reports](#artifacts--reports)
- [Configuration](#configuration)
  - [Global Settings](#global-settings)
  - [OS Profiles & Datastreams](#os-profiles--datastreams)
  - [Vendor Baselines](#vendor-baselines)
  - [Tailoring / Exceptions](#tailoring--exceptions)
- [Running in Ansible Automation Platform](#running-in-ansible-automation-platform)
- [Security & Compliance Notes](#security--compliance-notes)
- [CI / Quality Gates](#ci--quality-gates)
- [Extending the Repo](#extending-the-repo)
- [Troubleshooting](#troubleshooting)
- [Roadmap](#roadmap)
- [License](#license)

---

## What This Does
- **Scans** Linux hosts using **OpenSCAP** and the OS-appropriate SCAP Security Guide (SSG) profile (e.g., STIG, CIS).
- **Generates** an **Ansible remediation playbook** from the ARF results (failed rules only).
- **Applies** the remediation with safety controls (check-mode preview, optional manual ACK, optional reboot handler).
- **Verifies** by re-scanning and publishing **before/after** reports and a delta summary.
- **Routes** non-OS devices (ESXi, Cisco IOS-XE, PAN-OS, PowerFlex) to **platform-specific pipelines** that render and apply baselines/configs.
- **Auto-selects** the **current + last 2** major versions of vendor baselines based on live device facts.

---

## Repo Layout
openscap-ansible-pipeline/
├─ inventories/
│ ├─ lab/hosts.ini
│ └─ prod/hosts.ini
├─ group_vars/
│ ├─ all.yml # global settings, version policy, baseline library
│ ├─ os_linux.yml # os-specific toggles
│ ├─ os_windows.yml # placeholder
│ ├─ hypervisor_esxi.yml
│ ├─ network_cisco_ios.yml
│ ├─ network_paloalto.yml
│ └─ storage_powerflex.yml
├─ roles/
│ └─ common_oscap/
│ ├─ defaults/main.yml
│ └─ tasks/main.yml # installs OpenSCAP/SSG packages
├─ playbooks/
│ ├─ 00_preflight.yml
│ ├─ 01_scan.yml
│ ├─ 02_generate_remediation.yml
│ ├─ 03_apply_remediation.yml
│ ├─ 04_verify.yml
│ ├─ os_linux_pipeline.yml
│ ├─ os_windows_pipeline.yml # placeholder
│ ├─ hypervisor_esxi_pipeline.yml
│ ├─ network_cisco_ios_pipeline.yml
│ ├─ network_paloalto_pipeline.yml
│ ├─ storage_powerflex_pipeline.yml
│ └─ site.yml # dispatcher: routes hosts to proper pipeline
├─ templates/
│ └─ delta_summary.md.j2 # before/after summary
├─ files/
│ └─ vendor_baselines/
│ ├─ vmware/
│ ├─ cisco/
│ ├─ paloalto/
│ └─ powerflex/
├─ artifacts/ # generated at runtime (reports, ARF, configs)
├─ .github/workflows/lint.yml # CI: ansible-lint, yamllint, syntax-check
├─ .ansible-lint # linter config
├─ .yamllint # linter config
├─ .pre-commit-config.yaml # optional local hooks
├─ requirements.yml # Galaxy collections
└─ .gitignore


---

## Requirements
- **Ansible** (core) on the control machine.
- Linux targets need **OpenSCAP + SSG** packages (role `common_oscap` installs common packages for RHEL/Ubuntu).
- Collections (installed automatically via `requirements.yml`):
  - `ansible.posix`, `community.general`, `community.crypto`
  - `community.vmware` (ESXi facts/pipeline)
  - `cisco.ios` (IOS-XE pipeline)
  - `paloaltonetworks.panos` (PAN-OS pipeline)
- Credentials handled via inventory, **Ansible Vault**, or **AAP credentials**.

---

## Quick Start
```bash
# install required collections
ansible-galaxy collection install -r requirements.yml

# run the dispatcher over the lab inventory
ansible-playbook -i inventories/lab/hosts.ini playbooks/site.yml


Tip: Start with a single Linux test host in inventories/lab/hosts.ini. Add ESXi/network/storage after the OS path is validated.

How It Works
Inventory Routing

playbooks/site.yml detects the platform per host and includes the right pipeline:

Linux → os_linux_pipeline.yml (OpenSCAP → remediation → verify)

ESXi → hypervisor_esxi_pipeline.yml

Cisco IOS-XE → network_cisco_ios_pipeline.yml

PAN-OS → network_paloalto_pipeline.yml

PowerFlex → storage_powerflex_pipeline.yml

You can force a host’s pipeline with a host var:

rhel9-node1 platform=os_linux

Version Support Policy

We maintain templates for current + last 2 majors (configurable) and auto-select the correct template/datastream from group_vars/all.yml → baseline_library. If the exact major isn’t present, selection falls back to the nearest lower supported version (or the highest available).

Set policy in group_vars/all.yml:

support_policy:
  keep_major_depth: 3
version_selection_strategy: lower_first   # or: highest_available


Where you add versions:
group_vars/all.yml → baseline_library.* and files/vendor_baselines/<vendor>/...

OpenSCAP → Ansible Flow (Linux)

Preflight (00_preflight.yml): resolves profile & datastream for the OS, ensures OpenSCAP/SSG installed, creates artifact dirs.

Scan (01_scan.yml): runs oscap xccdf eval → collects ARF + HTML.

Generate Remediation (02_generate_remediation.yml): uses oscap xccdf generate fix --fix-type ansible against the ARF (failed rules only).

Apply (03_apply_remediation.yml): optional check-mode preview, optional manual ACK, apply tasks, optional reboot handler.

Verify (04_verify.yml): re-scan, pull post-ARF/HTML, write delta markdown summary.

Vendor Pipelines (ESXi / Cisco / PAN-OS / PowerFlex)

ESXi: gather facts via vCenter (if provided), auto-select VMware SCG template → render plan under artifacts/<host>/esxi_remediation.yml. (Role stubs included for preview/apply; bring your preferred SCG implementation or roles.)

Cisco IOS-XE: gather facts, auto-select template → render ios_remediation.cfg → check-mode diff → apply with ios_config.

PAN-OS: run show system info, auto-select template → render panos_candidate.xml → load (no commit) → optional commit.

PowerFlex: stub to query version, auto-select template, render plan; plug in your vendor API/CLI apply tasks.

Artifacts & Reports

All output lands under:

artifacts/<inventory_hostname>/
  <host>_baseline_<ts>.html
  <host>_baseline_<ts>.arf
  remediation_<ts>.yml         (Linux, generated)
  <host>_post_<ts>.html
  <host>_post_<ts>.arf
  summary_<ts>.md              (delta summary)
  ios_remediation.cfg          (Cisco)
  panos_candidate.xml          (PAN-OS)
  esxi_remediation.yml         (ESXi)
  powerflex_plan.yml           (PowerFlex)


Publish the artifacts/ directory via AAP Artifacts, a read-only web share, or object storage (e.g., S3) for auditors.

Configuration
Global Settings

group_vars/all.yml:

artifact_root: "{{ playbook_dir | dirname }}/artifacts"
remediation_check_mode_first: true
require_manual_ack_before_apply: false
platform: auto   # override per host if desired

# compliance metadata for audit logs
compliance:
  framework: NIST_800-53
  overlay: DISA_STIG
  owner: SecurityOps
  ticket_system: ServiceNow

OS Profiles & Datastreams

In group_vars/all.yml → baseline_library.os_linux map your OSes (RHEL/Ubuntu) to the correct SSG datastream and profile:

baseline_library:
  os_linux:
    rhel:
      "9":
        ds: /usr/share/xml/scap/ssg/content/ssg-rhel9-ds.xml
        profile: xccdf_org.ssgproject.content_profile_stig
      "8":
        ds: /usr/share/xml/scap/ssg/content/ssg-rhel8-ds.xml
        profile: xccdf_org.ssgproject.content_profile_stig
    ubuntu:
      "22.04":
        ds: /usr/share/xml/scap/ssg/ssg-ubuntu2204-ds.xml
        profile: xccdf_org.ssgproject.content_profile_cis
      "20.04":
        ds: /usr/share/xml/scap/ssg/ssg-ubuntu2004-ds.xml
        profile: xccdf_org.ssgproject.content_profile_cis

Vendor Baselines

Put your versioned templates here:

files/vendor_baselines/
  vmware/scg_8x.j2, scg_7x.j2, ...
  cisco/ios_xe_17_cis_level{{ cis_level }}.j2, ios_xe_16_...
  paloalto/panos_11_stig.j2, panos_10_stig.j2, ...
  powerflex/powerflex_4x_baseline.j2, powerflex_3x_baseline.j2, ...


Map them in baseline_library.hypervisor_esxi, baseline_library.network_cisco_ios, etc.

Tailoring / Exceptions

For Linux, you can pass a tailoring file to limit scope:

# group_vars/os_linux.yml
scap_tailoring_file: ""   # path on controller; leave empty to disable


When set, it’s appended to oscap xccdf eval as --tailoring-file <file>.

Running in Ansible Automation Platform

Create a Workflow with these Job Templates:

00_preflight.yml

01_scan.yml

02_generate_remediation.yml

03_apply_remediation.yml (insert an Approval Node before this, if desired)

04_verify.yml

Use Surveys to capture:

OS profile override, tailoring file path,

Approval toggles,

Maintenance window flags.

Artifacts appear in each job run and can be retained/exported.

Security & Compliance Notes

Use Ansible Vault for secrets locally; in AAP use Credential Types.

Consider running scans in FIPS-enabled environments where required.

Generated remediation tasks are idempotent; still review high-impact changes and use check_mode gates.

For DoD environments, pair with DISA STIG overlays/tailoring and maintain audit trails via artifacts + AAP job logs.

CI / Quality Gates

This repo includes:

GitHub Actions: .github/workflows/lint.yml → ansible-lint, yamllint, and ansible-playbook --syntax-check on every push/PR.

Optional pre-commit hooks: .pre-commit-config.yaml.

Enable branch protections on main: require PR + passing checks.

Extending the Repo

Add Windows: replace placeholder with OpenSCAP for Windows (SSG) or Microsoft Security Baseline via LGPO/PolicyD tasks.

Add vendors: create files/vendor_baselines/<vendor>/... and a <vendor>_pipeline.yml plus baseline map in group_vars/all.yml.

ServiceNow Change Controls: add a role/handlers to open/resolve tickets around the apply step.

Slack/Teams: post delta summaries and artifact links at the end of 04_verify.yml.

Troubleshooting

Q: Permission denied (publickey) when pushing to GitHub
A: Use HTTPS with a Personal Access Token or configure SSH keys (ssh-keygen, add pubkey to GitHub).

Q: src refspec main does not match any
A: You haven’t committed yet. Run git add . && git commit -m "…"

Q: Remote contains work; push rejected
A: git pull --rebase --allow-unrelated-histories origin main, resolve conflicts, then push; or push to a new branch and open a PR.

Q: OpenSCAP packages missing on Linux targets
A: The common_oscap role installs common packages for RHEL/Ubuntu. Ensure network access to repos or pre-stage packages.

Q: Datastream/profile not resolved
A: Verify baseline_library.os_linux paths match your distro/version. Adjust for RHEL8/9 vs Rocky/Alma mapping.

Q: Network device pipelines time out
A: Confirm the right connection (e.g., network_cli), credentials, and reachability. For PAN-OS, confirm API access.

Roadmap

Full Windows baseline implementation.

ESXi SCG enforcement role integration.

Optional artifact upload on PRs (publish sample HTML reports).

Nightly CI matrix for multiple Ansible/Python versions.

AAP job templates export (Controller export YAML).

License

Choose one and add a LICENSE file (recommended):

MIT (permissive), Apache-2.0 (permissive with patent grant), or an internal license if private.

# OpenSCAP → Ansible Remediation Pipeline  
## Inventory-routed • Version-aware • Enterprise-ready

> **BLUF:** This repo lets you scan hosts with **OpenSCAP**, auto-generate **Ansible remediation** from the scan results, apply those fixes safely, and re-scan to prove remediation. It also routes by inventory to apply **platform-specific baselines** for ESXi, Cisco IOS-XE, PAN-OS, and PowerFlex—automatically selecting the **current + last 2** major versions of each vendor’s baseline templates.

---

## Table of Contents

- [Purpose](#purpose)
- [Highlights](#highlights)
- [Quick links](#quick-links)
- [Prerequisites](#prerequisites)
- [Quick start](#quick-start)
- [How the Linux flow works (high level)](#how-the-linux-flow-works-high-level)
- [Vendor pipelines (what to expect)](#vendor-pipelines-what-to-expect)
- [Configuration](#configuration)
- [Artifacts and outputs](#artifacts-and-outputs)
- [CI and quality gates](#ci-and-quality-gates)
- [Extending this repo](#extending-this-repo)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)
- [Examples & safety notes](#examples--safety-notes)

---

## Purpose

This repository provides an inventory-driven pipeline to scan systems with OpenSCAP, generate Ansible remediation from scan results, apply those fixes with safety gates, and re-scan to verify remediation. It also contains vendor-specific pipelines for ESXi, Cisco IOS‑XE, Palo Alto PAN‑OS, and PowerFlex storage that render and optionally apply platform baselines.

## Highlights

- Inventory routing: a single dispatcher (`playbooks/site.yml`) routes hosts to the correct pipeline based on gathered facts or explicit host vars.
- Linux flow: OpenSCAP scan → generate Ansible remediation → optional preview/ACK → apply → re-scan and delta summary.
- Vendor pipelines: templates in `files/vendor_baselines/` are version-aware (current + last 2 majors by default) and are auto-selected from device facts.
- Artifacts: all reports, ARFs, remediation playbooks and rendered vendor configs are written under `artifacts/` for auditing.

## Quick links

- Dispatcher: `playbooks/site.yml`
- Linux pipeline: `playbooks/os_linux_pipeline.yml` (00_preflight → 01_scan → 02_generate_remediation → 03_apply_remediation → 04_verify)
- Vendor pipelines: `playbooks/hypervisor_esxi_pipeline.yml`, `playbooks/network_cisco_ios_pipeline.yml`, `playbooks/network_paloalto_pipeline.yml`, `playbooks/storage_powerflex_pipeline.yml`

## Prerequisites

- Control machine: Ansible (core). Recommended: Ansible 2.14+ or Ansible Core released around the same era as the installed collections.
- Collections: installed via `requirements.yml` (see below).
- Linux targets: OpenSCAP and appropriate SSG datastreams installed (the `roles/common_oscap` role provides installation tasks for common distributions).
- Credentials: supply via inventory, Ansible Vault, or Ansible Automation Platform (AAP) credentials.

## Install required collections

Run on your control node:

```bash
ansible-galaxy collection install -r requirements.yml
```

## Repository layout (important files)

- `inventories/` — sample lab/prod inventories
- `group_vars/` — global and platform variable maps (`all.yml`, `os_linux.yml`, `storage_powerflex.yml`, etc.)
- `playbooks/` — pipeline entrypoints and steps
- `roles/common_oscap/` — installs OpenSCAP/SSG packages and helpers
- `files/vendor_baselines/` — Jinja2 templates for vendor baselines and rendered configs
- `templates/delta_summary.md.j2` — summary used by the verify step
- `requirements.yml` — required Galaxy collections
- `artifacts/` — generated at runtime (reports, ARFs, remediation output)

## Quick start

1. Install collections

```bash
ansible-galaxy collection install -r requirements.yml
```

2. Run the dispatcher against the lab inventory

```bash
ansible-playbook -i inventories/lab/hosts.ini playbooks/site.yml
```

## Tips

- Start with a single Linux host in `inventories/lab/hosts.ini` to validate the OpenSCAP → remediation flow before adding ESXi or network/storage devices.
- Use `-e platform=os_linux` on the `ansible-playbook` command line to force a pipeline for testing.

## How the Linux flow works (high level)

1. `00_preflight.yml` — resolve datastream/profile (from `group_vars/all.yml` baseline_library), create artifact directories, ensure packages are present.

2. `01_scan.yml` — run `oscap xccdf eval` to produce ARF and HTML results.

3. `02_generate_remediation.yml` — generate an Ansible remediation playbook from the ARF that contains only the failed rules.

4. `03_apply_remediation.yml` — provide a check-mode preview, optional manual acknowledgement, apply remediation tasks, and optionally trigger a reboot handler.

5. `04_verify.yml` — re-run the scan, collect post-remediation ARF/HTML, and write a delta summary (`templates/delta_summary.md.j2`).

Vendor pipelines (what to expect)
 
- ESXi: facts from vCenter (if configured) are used to choose a VMware SCG template; a rendered `esxi_remediation.yml` is produced under artifacts.
- Cisco IOS‑XE: a rendered `ios_remediation.cfg` is produced and can be applied with `cisco.ios.ios_config` in check-mode before commit.
- PAN‑OS: a candidate XML (`panos_candidate.xml`) is rendered and can be loaded (no commit) for review.
- PowerFlex: a rendered plan (`powerflex_plan.yml`) is produced; the repo includes a stub pipeline to let you implement vendor API/CLI apply steps.

## Configuration

Global settings are in `group_vars/all.yml`. Key variables (examples):

- `artifact_root` — base path for artifacts (defaults to `${playbook_dir}/../artifacts`).
- `remediation_check_mode_first` — whether to run the apply step in check-mode first.
- `require_manual_ack_before_apply` — gate that requires manual confirmation before any destructive apply.
- `support_policy.keep_major_depth` — how many major versions to keep for vendor baseline selection (default: 3).

OS profiles & datastreams
Map your OS families and versions to SSG datastreams and profile IDs in `group_vars/all.yml` under `baseline_library.os_linux`. Example keys are `rhel`, `ubuntu`, and the numeric major/minor strings.

Vendor baselines
Place versioned Jinja templates in `files/vendor_baselines/<vendor>/`. The pipeline will select the best matching template using the configured support policy and the device facts.

## Artifacts and outputs

After a run, check `artifacts/<inventory_hostname>/` for:

- `<host>_baseline_<ts>.html` and `.arf` — pre-remediation scan
- `remediation_<ts>.yml` — generated Ansible remediation for Linux
- `<host>_post_<ts>.html` and `.arf` — post-remediation scan
- `summary_<ts>.md` — human-readable delta summary produced from `templates/delta_summary.md.j2`
- `ios_remediation.cfg`, `panos_candidate.xml`, `esxi_remediation.yml`, `powerflex_plan.yml` — vendor artifacts when relevant

## CI and quality gates

- A GitHub Actions workflow runs `ansible-lint`, `yamllint`, and `ansible-playbook --syntax-check` on changes (see `.github/workflows/lint.yml`).
- Consider enabling branch protection rules that require these checks to pass before merging.

## Extending this repo

- Add a new vendor: create `playbooks/<vendor>_pipeline.yml`, add versioned templates under `files/vendor_baselines/<vendor>/`, and update `group_vars/all.yml` `baseline_library` mappings.
- Add Windows: implement OpenSCAP (or equivalent) Windows scan and remediation steps and wire through `playbooks/os_windows_pipeline.yml`.

## Troubleshooting

- Permission/SSH errors: validate control-node keys and inventory credentials. Use Ansible Vault for secrets.
- Missing packages on targets: ensure package repos are reachable or pre-stage packages.
- Datastream/profile selection failures: verify `group_vars/all.yml` `baseline_library` entries match your OS names/versions.

## Contributing

- Open issues and PRs are welcome. When contributing changes to playbooks or roles:

  - Run `ansible-lint` and `yamllint` locally.
  - Add tests or example inventories if you add a new pipeline.

## Examples & safety notes

Example minimal inventory entries (use `inventories/lab/hosts.ini` as a starting point):

```ini
[os_linux]
rhel9-node1 ansible_host=10.0.1.10 platform=os_linux
ubuntu-node2 ansible_host=10.0.1.11

[hypervisor_esxi]
esxi01.lab.local ansible_host=10.0.2.10

[network_cisco_ios]
core-sw1 ansible_host=10.0.3.10 ansible_network_os=ios

[network_paloalto]
pa-fw1 ansible_host=10.0.3.20 ansible_network_os=panos

[storage_powerflex]
pflex-mgr1 ansible_host=10.0.4.10
```

Safety checklist when running the pipeline

- Always inspect generated remediation playbooks under `artifacts/<host>/remediation_<ts>.yml` before applying.
- Use `--check` for the apply step initially (the pipeline can be configured to run check-mode first via `remediation_check_mode_first`).
- Keep `require_manual_ack_before_apply: true` in `group_vars/all.yml` for production runs to force a human review.
- Run against a single test host first and review `artifacts/<host>/` outputs (HTML + ARF) before mass runs.

Sample delta summary excerpt (what auditors typically look for):

```text
# Compliance Delta Summary — rhel9-node1

Profile: xccdf_org.ssgproject.content_profile_stig
Datastream: /usr/share/xml/scap/ssg/content/ssg-rhel9-ds.xml

- Failed rules before: 42
- Failed rules after: 7
- Remediation playbook: artifacts/rhel9-node1/remediation_20250922T120000.yml

Publish artifacts to AAP or a read-only artifact store for audit retention.
```

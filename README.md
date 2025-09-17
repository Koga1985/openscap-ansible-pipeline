<<<<<<< HEAD
# openscap-ansible-pipeline
=======
# OpenSCAP → Ansible Remediation Pipeline (Inventory-Routed, Version-Aware)

A turnkey pipeline that:
1) Runs OpenSCAP baseline scans on OS hosts (ARF + HTML).
2) Generates **Ansible remediation** from ARF (failed rules only).
3) Applies remediation with safety gates (check-mode preview, manual ACK, reboot handler).
4) Re-scans and publishes **before/after** artifacts.
5) Routes by inventory to **ESXi, Cisco IOS-XE, PAN-OS, and PowerFlex** pipelines.
6) Auto-selects **current + last 2** vendor versions for baselines/templates.

## Quick start
```bash
ansible-galaxy collection install -r requirements.yml
ansible-playbook -i inventories/lab/hosts.ini playbooks/site.yml
```

Artifacts: `artifacts/<host>/...`

See `group_vars` and `files/vendor_baselines/*` to map versions → templates.
>>>>>>> 4c7ab0d (Initial commit: OpenSCAP→Ansible remediation pipeline (inventory-routed, version-aware))

ls
vagrant plugin install vagrant-vmware-desktop
ls
vagrant
wget -O - https://apt.releases.hashicorp.com/gpg | sudo gpg --dearmor -o /usr/share/keyrings/hashicorp-archive-keyring.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/hashicorp-archive-keyring.gpg] https://apt.releases.hashicorp.com $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/hashicorp.list
sudo apt update && sudo apt install vagrant
vagrant plugin install vagrant-vmware-desktop
mkdir ~/vagrant_ansible_setup
cd ~/vagrant_ansible_setup
nano Vagrantfile
vagrant up --provider=vmware_desktop
cd /
cd ~
ls
vagrant plugin install vagrant-vmware-desktop
cd vagrant_ansible_setup
vagrant up --provider=vmware_desktop
cd ~
ls
sudo mkdir -p /opt/vagrant-vmware-desktop/bin
sudo unzip -d /opt/vagrant-vmware-desktop/bin vagrant-vmware-utility_1.0.0_linux_amd64.zip
sudo /opt/vagrant-vmware-desktop/bin/vagrant-vmware-utility certificate generate
sudo sv start vagrant-vmware-utility
cd vagrant_ansible_setup
vagrant ssh controller
sudo apt install openssh-client
pip install ansible
sudo apt install python3-pip
pip install ansible
sudo apt install openssh-client
pip install ansible
sudo apt-add-repository ppa:ansible/ansible
sudo apt update
sudo apt install ansible
sudo apt update
sudo apt upgrade
cp /mnt/c/C:\Users\smithdew/.ssh/config ~/.ssh/config
ssh-keygen
ls
apt get update
sudo apt get update
sudo apt-get update
sudo apt-get upgrade
sudo apt update
sudo apt upgrade
ansible --version
ansible all -m ping
ansible-vault create
ansible --version
ls
cd /etc
ls
cd /ansible
/.
ls
cd ansible
ls
cd hosts
cd /hosts
cd host
ls
mkdir playbooks
sudo mkdir playbooks
ls
cd playbooks
ls
cd /etc/ansible/playbooks
ls
#!/bin/bash
set -e
# Ensure the script is run as root
if [[ $EUID -ne 0 ]]; then   echo "This script must be run as root. Use sudo or run as root.";   exit 1; fi
#!/bin/bash
set -e
# Ensure the script is run as root
if [[ $EUID -ne 0 ]]; then   echo "This script must be run as root. Use sudo or run as root.";   exit 1; fi
ifconfig
ping 192.168.15.255
ifconfig
sudo apt install net-tools
ifconfig
scp
scp deploy_edge_ai.sh dewain@192.168.15.255:~
bash
onprem_seim_ai.yml --check
ansible playbook onprem_seim_ai.yml --check
---
# -------------------------------------------------------------------
# Playbook: bootstrap_inventory.yml
# Purpose : Discover dynamic inventory via a script, then render
#           a static inventory file for downstream playbooks.
# Best    : - Uses connection: local and playbook_dir for portability
# Practices: - Fully qualified module names
#           - Explicit changed_when/check_mode control
#           - Tags for selective runs
#           - File modes and idempotence
# -------------------------------------------------------------------
- name: Discover environment and build static inventory
---
# -------------------------------------------------------------------
# Playbook: bootstrap_inventory.yml
# Purpose : Discover dynamic inventory via a script, then render
#           a static inventory file for downstream playbooks.
# Best    : - Uses connection: local and playbook_dir for portability
# Practices: - Fully qualified module names
#           - Explicit changed_when/check_mode control
#           - Tags for selective runs
#           - File modes and idempotence
# -------------------------------------------------------------------
- name: Discover environment and build static inventory
unzip openscap-ansible-pipeline.zip
cd openscap-ansible-pipeline
git init
git remote add origin git@github.com:<you>/openscap-ansible-pipeline.git
git add .
git commit -m "Initial commit: OpenSCAP→Ansible remediation pipeline (inventory-routed, version-aware)"
git push -u origin main
unzip openscap-ansible-pipeline.zip
cd openscap-ansible-pipeline
git init
git remote add origin git@github.com:<you>/openscap-ansible-pipeline.git
git add .
git commit -m "Initial commit: OpenSCAP→Ansible remediation pipeline (inventory-routed, version-aware)"
git push -u origin main
unzip openscap-ansible-pipeline.zip
cd openscap-ansible-pipeline
# initialize on main (in case git isn't set yet)
git init -b main
# point to YOUR repo
git remote add origin git@github.com:Koga1985/openscap-ansible-pipeline.git
# (HTTPS alternative)
# git remote add origin https://github.com/Koga1985/openscap-ansible-pipeline.git
git add .
git commit -m "Initial commit: OpenSCAP→Ansible remediation pipeline (inventory-routed, version-aware)"
git push -u origin main
unzip C:\Users\smithdew\Desktop\openscap-ansible-pipeline.zip
cd openscap-ansible-pipeline
# initialize on main (in case git isn't set yet)
git init -b main
# point to YOUR repo
git remote add origin git@github.com:Koga1985/openscap-ansible-pipeline.git
# (HTTPS alternative)
# git remote add origin https://github.com/Koga1985/openscap-ansible-pipeline.git
git add .
git commit -m "Initial commit: OpenSCAP→Ansible remediation pipeline (inventory-routed, version-aware)"
git push -u origin main
git remote remove origin
git remote add origin git@github.com:Koga1985/openscap-ansible-pipeline.git
unzip C:\Users\smithdew\Desktop\openscap-ansible-pipeline.zip
cd openscap-ansible-pipeline
# initialize on main (in case git isn't set yet)
git init -b main
# point to YOUR repo
git remote add origin git@github.com:Koga1985/openscap-ansible-pipeline.git
# (HTTPS alternative)
# git remote add origin https://github.com/Koga1985/openscap-ansible-pipeline.git
git add .
git commit -m "Initial commit: OpenSCAP→Ansible remediation pipeline (inventory-routed, version-aware)"
git push -u origin main
git remote remove origin
git remote add origin git@github.com:Koga1985/openscap-ansible-pipeline.git
git remote set-url origin https://github.com/Koga1985/openscap-ansible-pipeline.git
git push -u origin main
# 0) Install unzip once
sudo apt update && sudo apt install -y unzip
# 1) Use the Windows file via the WSL path
#    Your Windows Desktop in WSL is under /mnt/c/Users/<you>/Desktop
mkdir -p ~/src && cd ~/src
unzip "/mnt/c/Users/smithdew/Desktop/openscap-ansible-pipeline.zip" -d .
# 2) Go into the unzipped project (make sure this folder exists)
cd openscap-ansible-pipeline
# 3) Ensure you’re NOT in your home dir; fix the accidental .git in ~ if it happened
#    (Only do this if you really created a git repo in your home directory by mistake.)
#    cd ~ && [ -d .git ] && rm -rf .git
#    cd ~/src/openscap-ansible-pipeline
# 4) Configure your git identity (one time)
git config --global user.name "Dewain Smith"
git config --global user.email "your-email@whatever.com"
# 5) Initialize the repo on main and make the first commit
git init -b main
git add .
git commit -m "Initial commit: OpenSCAP→Ansible remediation pipeline (inventory-routed, version-aware)"
# 6) Point to YOUR GitHub repo
#    If 'origin' already exists from a previous attempt, set-url instead of add.
git remote -v | grep origin   && git remote set-url origin git@github.com:Koga1985/openscap-ansible-pipeline.git   || git remote add origin git@github.com:Koga1985/openscap-ansible-pipeline.git
# 7) Push
git push -u origin main
git remote set-url origin https://github.com/Koga1985/openscap-ansible-pipeline.git
git push -u origin main
cd ~/src/openscap-ansible-pipeline   # adjust if different
git remote set-url origin https://github.com/Koga1985/openscap-ansible-pipeline.git
git push -u origin main
pwd
git rev-parse --show-toplevel
git log --oneline
git add .
git commit -m "Initial commit: OpenSCAP→Ansible remediation pipeline (inventory-routed, version-aware)"
git remote -v
git remote set-url origin git@github.com:Koga1985/openscap-ansible-pipeline.git
# or HTTPS:
git remote set-url origin https://github.com/Koga1985/openscap-ansible-pipeline.git
# initialize on main (in case git isn't set yet)
git init -b main
# point to YOUR repo
git remote add origin git@github.com:Koga1985/openscap-ansible-pipeline.git
# (HTTPS alternative)
# git remote add origin https://github.com/Koga1985/openscap-ansible-pipeline.git
git add .
git commit -m "Initial commit: OpenSCAP→Ansible remediation pipeline (inventory-routed, version-aware)"
git push -u origin main
cd ~/src/openscap-ansible-pipeline
# make sure your remote is set
git remote -v
# pull the remote main *into* your local main, keeping your history clean
git pull --rebase --allow-unrelated-histories origin main
# if you see conflicts, fix the files, then:
git add -A
git rebase --continue   # repeat add/continue until done
# now push your combined history
git push -u origin main
git remote show origin
git log --oneline | head
cd ~/src/openscap-ansible-pipeline
unzip "/mnt/c/Users/smithdew/Downloads/ci-addition.zip" -d .
git add .github/workflows/lint.yml .pre-commit-config.yaml .ansible-lint .yamllint
git commit -m "CI: add ansible-lint, yamllint, and syntax-check workflow"
git push
cd ~/src/openscap-ansible-pipeline
unzip "/mnt/c/Users/smithdew/Desktop/ci-addition" -d .
git add .github/workflows/lint.yml .pre-commit-config.yaml .ansible-lint .yamllint
git commit -m "CI: add ansible-lint, yamllint, and syntax-check workflow"
git push

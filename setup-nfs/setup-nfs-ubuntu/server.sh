#!/bin/bash
#? NOTE
#@ At RancherServer

#? Cài đặt NFS Server
sudo apt update -y
sudo apt install nfs-kernel-server -y

#? Tạo thư mục chia sẻ và cấp quyền truy cập
sudo mkdir -p /data/delete
sudo mkdir -p /data/retain
sudo chmod -R 777 /data/
sudo chown nobody:nogroup /data/ -R

#? Cấu hình exports "" directory_to_share  client(share_option1,...,share_optionN) ""

sudo bash -c 'cat <<EOF >/etc/exports
    /data/retain    192.168.33.0/24(rw,sync,no_root_squash,no_all_squash,no_subtree_check)
    /data/delete    192.168.33.0/24(rw,sync,no_root_squash,no_all_squash,no_subtree_check)
EOF'

#? Reload dịch vụ NFS:
sudo exportfs -a

#? Bật dịch vụ NFS:
sudo systemctl enable nfs-kernel-server
sudo systemctl start nfs-kernel-server
sudo systemctl status nfs-kernel-server

#? check share
sudo showmount -e 192.168.33.41

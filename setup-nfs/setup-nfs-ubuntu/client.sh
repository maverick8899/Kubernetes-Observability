#!/bin/bash
#@ for each WORKER

#? Cài đặt NFS Client
sudo apt update -y
sudo apt install nfs-common -y

#? Tạo thư mục để mount NFS Share
sudo mkdir -p /mnt/nfs_share-delete
sudo mkdir -p /mnt/nfs_share-retain

#? Mount NFS Share "<IP_CUA_SERVER >:/srv/nfs_share mount /mnt/nfs_share "
#? Unmount sudo umount /mnt/nfs_share
sudo mount 192.168.33.41:/data/delete /mnt/nfs_share-delete
sudo mount 192.168.33.41:/data/retain /mnt/nfs_share-retain

#? Check
df -h
du -sh /mnt/



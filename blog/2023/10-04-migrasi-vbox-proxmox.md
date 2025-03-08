---
slug: migrasi-vdi-proxmox
title: Migrasi VDI VBOX ke Proxmox
authors: jazuly
tags: [catatan]
---

# Migras VDI VBox ke Proxmox

## Step by step!

1. Temukan file .vdi VM Anda - Pertama, kita perlu mencari file hard disk VirtualBox (.vdi).
	- Buka GUI VirtualBox
	- Klik pada VM yang ingin kita migrasikan dan klik tombol Settings
	- Klik Storage dan klik file .vdi yang terdaftar di bawah IDE Controller
	- Mouse over the Hard Disk: kotak daftar dropdown dan catat path ke file .vdi

<!-- truncate -->

2. Mengkonversi .vdi ke .img - Selanjutnya kita perlu mengkonversikan hard drive ke format RAW untuk ProxMox.
    - Pada host VirtualBox (C:\Program Files\Oracle\VirtualBox) buka command prompt, jalankan :
    > *VBoxManage clonehd --format RAW [virtual_harddisk] .vdi [virtual_harddisk] .img*
    > 
    > contoh : 
    > *\>VBoxManage clonehd --format RAW "D:\KERJA\VIRTUALISASI\OS Mentah\Ubuntu 18.04.4-Server MJ1\Ubuntu 18.04.4-Server MJ1.vdi" "D:\KERJA\VIRTUALISASI\OS Mentah\Ubuntu 18.04.4-Server MJ1\Ubuntu 18.04.4-Server MJ1.img"*
3. Membuat VM Kosong di poxmox.
	- Buka proxmox web
	- Create VM
	- Set semua default di VM
	- Misalnya VMID : 101
4. Upload .img file
	- Tes koneksi, Bisa menggunakan ssh -> buka cmd -> ketik `ssh root@ip-proxmox` (jika terdapat error -> [[#ERROR SSH - WARNING REMOTE HOST IDENTIFICATION HAS CHANGED]])
	- buat mkdir -p /var/lib/vz/images/998
	- kembali ke mesin virtualbox
	- mv *.img menjadi vm-101-disk-1.raw (misalnya utk VMID: 101)
	- upload dengan perintah : 
	> scp file.img username@ip-proxmox:/var/lib/vz/images/"VMID"
	> 
	> contoh :
	> \>C:\Users\Win-User>scp "D:\KERJA\VIRTUALISASI\OS Mentah\Ubuntu 18.04.4-Server MJ1\Ubuntu18.04.4-Server.raw" root@192.168.11.110:/var/lib/vz/images/101
5. Ubah configurasi 101.conf pada -> /etc/pve/nodes/proxmox1/qemu-server 
	Semula :
```
boot: order=scsi0;ide2;net0
cores: 1
ide2: none,media=cdrom
memory: 2048
name: UbuntuServer18.04Vbox
net0: virtio=DA:FA:A9:16:E4:63,bridge=vmbr0,firewall=1
numa: 0
ostype: l26
scsi0: local-lvm:vm-101-disk-0,size=20G
scsihw: virtio-scsi-pci
smbios1: uuid=a3d94e54-cec5-4925-95e9-ecaa0c9c07d0
sockets: 1
vmgenid: 85626e3f-fdc3-4e51-8dd5-34bdcc9e9751
```
Menjadi :
```
boot: order=scsi0;ide2;net0
cores: 1
ide2: none,media=cdrom
memory: 2048
name: UbuntuServer18.04Vbox
net0: virtio=DA:FA:A9:16:E4:63,bridge=vmbr0,firewall=1
numa: 0
ostype: l26
scsi0: local:101/Ubuntu1804-Server.raw,format=raw,cache=writeback,size=20G
scsihw: virtio-scsi-pci
smbios1: uuid=a3d94e54-cec5-4925-95e9-ecaa0c9c07d0
sockets: 1
vmgenid: 85626e3f-fdc3-4e51-8dd5-34bdcc9e9751
```

6. Boot it!

### ERROR SSH -> WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED! 
#referensi -> [jaranguda.com](https://jaranguda.com/cara-mengatasi-ssh-error-remote-host-identification-has-changed/)

kalo tidak di atasi, kita tidak akan bisa login ke server tersebut. Ada beberapa kemungkinan kenapa muncul peringatan tersebut, sebelumnya akan saya jelaskan secara singkat cara SSH client konek SSH server.

ketika kita menjalankan `ssh root@IP-SERVER`, client akan menanyakan server key yang dimiliki, lalu disimpan di file `~/.ssh/known_hosts`, jadi tiap terhubung ke server yang sama tidak akan ditanyakan apakah key server tersebut dipercaya atau ngga selama key nya sama. Masalah yang terjadi disini adalah anda terhubung ke IP server yang sudah pernah anda simpan, tetapi terdapat perubahan key/fingerprint dari SSH Server yang bisa terjadi karena install ulang, Key nya diubah oleh admin. Hal ini akan sering terjadi bila anda sering testing banyak server di cloud yang sering memberikan IP yang sama sewaktu reinstall.

#### Solusi REMOTE HOST IDENTIFICATION HAS CHANGED
Pertama check baris ke "160" dari file `.ssh/known_hosts` seperti yang muncul di error diatas.
Intinya -> hapus key pada baris yang ditampilkan error. Kemudian login ulang.

# **MIGRASI PROXMOX  KE VIRTUALBOX**

## Convert .qcow2 ke VMDK
```bash
$ sudo qemu-img convert -p -f qcow2 -O vmdk /var/lib/vz/images/106/vm-106-disk-0.qcow2 /var/lib/vz/images/106/vm-106-disk-0.vmdk
```
## Copy ke usb
```bash
$ sudo mkdir /media/external #buat direktory baru
$ sudo fdisk -l #lihat lokasi drive usb
$ sudo mount -t vfat /dev/sdb1 /media/external -o uid=1000,gid=1000,utf8,dmask=027,fmask=137 #mount usb
$ sudo rsync --progress /var/lib/vz/images/106/vm-106-disk-0.vmdk /media/external/vm-106-disk-0.vmdk #copy ke usb
```
## Buka di Virtualbox
Buat virtual baru, pada pilihan storage, pilih `file.vmdk` yang telah di copy tadi. DONE.


---

Referensi:
- [lms.onnocenter.or.id](https://lms.onnocenter.or.id/wiki/index.php/Proxmox:_Migrasi_VDI_VirtualBox_ke_Proxmox)
- [mampirklik.com](https://www.mampirklik.com/2017/11/tip-cara-migrasi-virtualbox-vdi-ke.html)
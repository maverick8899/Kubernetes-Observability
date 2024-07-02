#!/bin/bash

##@ CHOCO
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))

##@ Vagrant and plugins
choco install vagrant
vagrant plugin install vagrant-hostmanager
vagrant plugin install vagrant-vbguest

#!/bin/bash
sudo apt-get update
sudo apt-get -y install nginx
sudo ufw allow 'Nginx Full'
sudo apt-get -y install curl
sudo apt-get install -y build-essential
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs

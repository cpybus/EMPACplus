#!/bin/sh
# launcher.sh
# navigate to home directory, then to the desktop, then execute python script, then back home

cd /
cd home/pi/Desktop
sudo python main.py
cd /
#!/bin/sh
echo 'Starting deployament...'
sudo chmod 777 .
sudo chmod +r docker-compose.yml
echo 'Chmod is successful'
sudo docker-compose up -d
echo 'wow)'
#!/bin/sh
echo 'Starting deployament...'
sudo chmod +r docker-compose.yml
echo 'Chmod is successful'
sudo docker-compose up
echo 'wow)'
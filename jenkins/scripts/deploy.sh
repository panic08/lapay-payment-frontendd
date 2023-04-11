#!/bin/sh
echo 'Starting deployament...'
sudo chmod 777 .
echo 'Chmod is successful'
sudo docker-compose up -d
echo 'wow)'
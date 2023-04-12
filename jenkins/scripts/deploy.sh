#!/bin/sh
echo 'Starting deployament...'
echo 'Chmod is successful'
sudo chmod +r docker-compose.yml
docker-compose up
echo 'wow)'
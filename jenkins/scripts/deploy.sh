#!/bin/sh
echo 'Starting deployament...'

echo 'Chmod is successful'
sudo chmod a+r docker-compose.yml
echo 'Chmod is great'
docker-compose up
echo 'wow)'
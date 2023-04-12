#!/bin/sh
echo 'Starting deployament...'

echo 'Chmod is successful'
chmod +r docker-compose.yml
docker-compose up
echo 'wow)'
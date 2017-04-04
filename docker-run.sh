#!/bin/bash

docker stop cavok

docker rm cavok

docker run --name=cavok -p 8000:8000 -v /etc/localtime:/etc/localtime -v /tmp/cavok-data:/src/data -d skarppi/cavok

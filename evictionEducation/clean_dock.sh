#!/bin/bash

docker image prune 
docker volume prune
docker container prune
docker builder prune
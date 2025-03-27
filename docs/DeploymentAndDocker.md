# Deployment and Docker

[`Return Home`](./TechDetailsHome.md)

For this project, we wanted a deployment method that would be flexible, scalable, and most importantly maintainable.

From the beginning of the project (and no doubt continuing into future semesters) there was talk about third party integrations. With that in mind, we wanted to choose a deployment method that would work on most systems, as well as bringing along the environment and any env variables needed.

Given that the project is still in it's infancy, we also wanted to ensure scalability. Finally, maintainability - ensuring that the software we used would be supported (and have avaliable documentation) for as many future iterations as possible! To support this, we also made an effort to provide ample documentation.

Thus, we choose Docker as our image container. Information on installation can be found [here](https://www.docker.com/), though it only needs to be downloaded to the desktop for testing purposes.

To host the .iso we are employing a Kubernetes cluster, owned by Professer Engelmann. For information on installing kubernetes, look [here](https://kubernetes.io/).
To access the kubernetes cluster, you will be provided a config file from Professer Engelmann. ***DO NOT*** upload it anywhere on this repository. More details about accessing the cluster can be found below.

### Table of Contents
- [`Table of Contents`](#table-of-contents)
- [`Docker Configuration`](#docker-configuration)
- [`Github Build Actions`](#github-build-actions)
- [`Kubernetes`](#kubernetes)

### Docker Configuration

#### React App Dockerfile

- node:18-alpine for build
- exposes port 3000

#### Spring App Dockerfile

- maven for build
- openjdk:21-jdk for run
- exposes port 8080

#### Docker Compose file

This file is meant to ease the local machine deployment for testing! It will automatically build each container and run their images at the same time!

simply run: 
``` bash
    docker compose up
```
in the Eviction Education directory. 

Unfortunatley, running docker locally can take up a *lot* of space. And however many optimizations you do to slim it, it still might not be enough. So, to ease any constant clearing of space we have also provided the `clean_dock.sh` file to automate inputting the docker prune commands. It was chosen to run the following commands in sequence (promoting for each) to maintain thoughfulness about deletion. An alternative command is provided below:

```
    docker image prune # hanging or stopped images
    docker container prune # hanging or stopped containers
    docker volume prune # hanging or unused volumes
    docker builder prune # build cache
```
vs. 
```
    docker system prune -a -f
```

### Github Build Actions

We currently have two github build actions, one for each docker image. It currently is configured for each push to a specififed branch. Uses the default build action [provided by Github](https://docs.github.com/en/actions/sharing-automations/creating-actions/creating-a-docker-container-action)

#### Kubernetes

Once you have gotten your kubernetes installation all setup, you'll want to be able to see what's running!

The main three commands you'll need are 

``` 
kubectl --kubeconfig CONFIG.FILE get deploy
```
This shows the currently deployed images, for us named "spring" and "react"

``` 
kubectl --kubeconfig CONFIG.FILE get pod
```
Shows the specific verion of each image

``` 
kubectl --kubeconfig CONFIG.FILE edit deploy/DEPLOY_NAME
```
Allows you to edit the deployment params



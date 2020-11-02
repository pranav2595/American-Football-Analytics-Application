# vue-app

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Instructions to deploy in docker

1. Navigate to vue-app
2. Build docker image for the Dockerfile present in the folder using the command below.
```
docker build .
```
3. Note down the recently created docker imageID by running the command below
```
docker image ls
```
4. Spin up a docker container using the recently created docker container binding the host ip to the container port for accessing the running front-end application. Use the following command 
```
docker run -p 127.0.0.1:8081:8080 <imageID>
```
## Instructions to run tests
1. Navigate to vue-app
2. run "npm run test:unit" to run the tests
3. run "npm run test:coverage" for coverage results

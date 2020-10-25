### Instructions to run (traditional way):
Simply run the file as shown below:
```
cd backend/src
```
```
python app.py
```
### Instructions to run (Dockerized way):

1. Install Docker.
2. Navigate to backend/src of the project on terminal.
3. Build a docker image using the DockerFile in the folder.Type command "docker build ."
4. Spin up a container using the created docker image and bind the respective port for backend connectivity to container.
    Command: docker run -p <hostport>:<container_port> <imageID>
5. Start the front end application. It should automatically connect to the server and the container is now serving the application.
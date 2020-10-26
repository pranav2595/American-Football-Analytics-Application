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

### Football Related Terms
Tackle Factor (TF) – The  ratio of a player’s proportion of his team’s tackles compared to what is expected at his position. For example, middle linebackers in a 4-3 typically make 11.9% of their team's tackles. A MLB who made 12.6% of his team's tackles would have a TF of 11.9/12.6 = 1.06. TF is adjusted for a full 16-game season. 

Air Yards (AY) - The passing yards forward of the line of scrimmage in which the ball travels through the air. In other words, it is total passing yards minus any yards after catch (YAC) gained by the receiver. 

Air Yards Per Attempt (Air YPA) - The average air yards (AY) gained per pass attempt. Note that this does not include any sack yards. 

Catch Rate (CR) – The proportion of passes targeted to a receiver that are caught. 

Interception Rate (Int%) – The proportion of passes attempted that result in interceptions. 

Fumble Rate (Fum%) – The proportion of carries that running back fumbles the ball. Yards per Rush (YPR) – Yards gained per rush attempt. 

Deep Pass Percentage (Deep%) – The proportion of pass targets in which a receiver is greater than 15 yards beyond the line of scrimmage. 

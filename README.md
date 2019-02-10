# Flickr Emotions Recognition
Flickr Emotions Recognition project for INT20H Hackathon
To run this project you need only Docker & Docker-Compose.
To run project you need to use next command:
`docker-compose up -d`
Also, you can easily deploy it to Heroku. You need to add mongodb to application and use next commands to deploy:
`
heroku container:push web -a flickr-emotions-recognition   
heroku container:release web -a flickr-emotions-recognition
`
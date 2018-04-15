Tutorials at http://blog.nanthrax.net/?p=827 and https://www.sitepoint.com/building-twitter-app-using-angular/ contributed ideas and techniques used.
Clone or download the repo. 
First, open up twitter-backend/server.js and enter your twitte api credential information.
Navigate to twitter-backend folder at terminal
Enter – “npm install –save express twit” in terminal (Must have node and npm at least current LTS)
Now type “node server” and should see “Server running” message. The backend server is now up and running.
Open a second terminal window and navigate to the twitter-frontend folder
Type “mvn clean install” which will bundle up the angular front end as a jar file and make it available as a java package.
Navigate to your karaf install and start it up (bin/karaf) 
Enter “feature:install war” at karaf terminal
Now enter “bundle:install -s mvn:com.twitterClient/twitter-frontend/1.0-SNAPSHOT” at the karaf terminal and you will see a bundle ID. The front end server should now be running.
Navigate to “localhost:8181/twitter-frontend” in a browser and the front end should load up.

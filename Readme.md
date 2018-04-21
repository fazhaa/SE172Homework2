# Twitter Test App

## Tutorials at http://blog.nanthrax.net/?p=827 and https://www.sitepoint.com/building-twitter-app-using-angular/ contributed ideas and techniques.

1. Clone or download the repo. 
2. Then, open up twitter-backend/server.js and enter your twitter api credential information.
3. Navigate to twitter-backend folder at terminal
4. Enter – “npm install –save express twit cors” in terminal (Must have node and npm at least current LTS)
5. Now type “node server” and should see “Server running” message. The backend server is now up and running.
6. Open a second terminal window and navigate to the twitter-frontend folder
7. Type “mvn clean install” which will bundle up the angular front end as a jar file and make it available as a java package.
8. Navigate to your karaf install and start it up (bin/karaf) 
9. Enter “feature:install war” at karaf terminal
10. Now enter “bundle:install -s mvn:com.twitterClient/twitter-frontend/1.0-SNAPSHOT” at the karaf terminal and you will see a bundle ID. The front end server should now be running.
11. Navigate to “localhost:8181/twitter-frontend” in a browser and the front end should load up.

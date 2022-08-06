# Github-Profiler

**The application offers the following features**

* A single page application where you can search any user on github using their username.
* On clicking a user you will got to the profile page of that user.
* In profile page important details of the user is listed on right side (bigger screen) or on top (smaller screen).
* User Details are name, bio, followers count, following count, blog link, github profile link.
* On left side the repositories of the user will show with pagination. At a time only 6 repositories will get shown.
* Each repository will have its name, description, repository link and languages used for that repository.

** Steps to test in local system **

* note - since the backend is deployed to heroku you can skip step 2 to 4 because frontend has heroku url.

* clone this repo in your local system.
* move to backend folder and run command "npm install" to download the node_modules.
* now create a .env file and add your public access token of github. Example - TOKEN=YOUR_TOKEN
* now run "npm start" to run server.
* open another command prompt in frontend folder and run "npm install" to download node_modules in frontend.
* now run "npm start" to run the server.

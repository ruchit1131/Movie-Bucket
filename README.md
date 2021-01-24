# Movies' Bucket 

### [Live Site](https://movies-bucket.herokuapp.com/)<br/><br/>

## TECH

  ![HTML5](https://img.shields.io/badge/-HTML5-333333?style=flat&logo=HTML5)&nbsp;&nbsp;&nbsp;
  ![CSS](https://img.shields.io/badge/-CSS-333333?style=flat&logo=CSS3&logoColor=1572B6)&nbsp;&nbsp;&nbsp;
  ![JavaScript](https://img.shields.io/badge/-JavaScript-333333?style=flat&logo=javascript)&nbsp;&nbsp;&nbsp;
  ![Bootstrap](https://img.shields.io/badge/-Bootstrap-333333?style=flat&logo=bootstrap&logoColor=563D7C)&nbsp;&nbsp;&nbsp;
  ![Node.js](https://img.shields.io/badge/-Node.js-333333?style=flat&logo=node.js)&nbsp;&nbsp;&nbsp;
  ![React](https://img.shields.io/badge/-React-333333?style=flat&logo=react)&nbsp;&nbsp;&nbsp;
  ![MongoDB](https://img.shields.io/badge/-Mongodb-333333?style=flat&logo=mongodb)&nbsp;&nbsp;&nbsp;
  ![bcrypt](https://img.shields.io/badge/module-bcrypt-blue)&nbsp;&nbsp;&nbsp;
  ![OMDB-API](https://img.shields.io/badge/api-OMDB-blue)&nbsp;&nbsp;&nbsp;
  ![Youtube](https://img.shields.io/badge/api-Youtube-blue)&nbsp;&nbsp;&nbsp;
  ![0auth](https://img.shields.io/badge/api-Google%200auth-blue)<br/><br/><br/>
<a href="https://ibb.co/ZcdYCYq"><img src="https://i.ibb.co/vL1Q8Q0/login.png" alt="login" width="250" border="0" /></a>&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://ibb.co/mXTqVd2"><img src="https://i.ibb.co/4YtTnCX/s1.png" alt="s1" width="250" border="0" /></a>&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://ibb.co/yQ5xn6f"><img src="https://i.ibb.co/G5krvWx/s2.png" alt="s2" width="250" border="0" /></a>&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://ibb.co/6ZNV2hR"><img src="https://i.ibb.co/0XQ8kNj/s3.png" alt="s3" width="250" border="0" /></a>&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://ibb.co/r5GZPG9"><img src="https://i.ibb.co/dk0Q90Z/home.png" alt="home" width="250" border="0" /></a>&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://ibb.co/SN7MzPy"><img src="https://i.ibb.co/D4gvZtW/fav.png" alt="fav" width="250" width="300" border="0" /></a>&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://ibb.co/LpRx1TC"><img src="https://i.ibb.co/C08bQjn/bin.png" alt="bin" width="250" border="0" /></a>&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://ibb.co/r3Qjw42"><img src="https://i.ibb.co/sCgfVy9/a.png" alt="a" width="250" border="0" /></a>
<br/><br/><br/><br/>


## ABOUT
  This is a CRUD MERN stack app. You can add movies to your movies' bucket(i.e list of what movies you want to watch), delete them,mark them as watched, move to favourites, unfavourite, etc.
  You can search movie information and get all the information about the movie - rating, actors, plot, poster, language, etc. You can read the plot and watch the trailer of the movie and if you want to watch ir, add it to your movies' bucket in just a click! You can prioritize your movies' bucket and add directly to favourites. If you delete a movie by accident, you can restore it from the bin. No need to fill up the registration form, just click on Google login and login with your Google email. You will not be logged out if you close the app in your browser. Your password is encrypted. The movie information is fetched from OMDB API. The trailer is fetched from Youtube API by appending movie name, name of one actor, type(movie or series) and "trailer" to search query.

## FEATURES

  + Search movie and get all information about the movie: IMDB rating, Number of votes, Rating, Duration, Language, Gerne, Language, Release date, Poster, Plot, Director, Actors and the trailer of the movie. Scroll down to see the movie
  + Add movies manually as well as from the list of searched movies.
  + Add movies directly to favourites from the search list.
  + You can look in the bin if you deleted the movie accidentaly.
  + Google Login
  + Add movies to favourites.
  + Mark movies watched or unwathched by clicking on them. If wathced, it will be green, else red.
  + User data sotred in local storage so that user does not log out if browser tab is closed.
<br/><br/>

## SETUP

### Using Command Line

  + Clone the git repo using "git clone https://github.com/ruchit1131/Movie-Bucket.git"
  + Move to the git directory using "cd Movie-Bucket"
  + Change branch to v1.0.1 using "git checkout v1.0.0"
  + Install node_modules using "npm i"
  + Start the server using "nodemon index"
  + Go to http://localhost:5000 and the app should start working
  + To use client and server seperately, install node modules in client folder as well and run command "npm run start". The app should automatically open on "http://localhost:3000" if port 3000 is not busy (Server should be running)

### Without command line

  + Switch to v1.0.0 branch of this repo.
  + Download the code.
  + Follow instructions from 'Using command line' 
<br/><br/>

## NOTE: You need to add your own API Keys and mongodb connect link. Files in which you need to add are index.js, client/src/App.js, client/src/pages/Register.js, client/src/components/pages/Youtube.js 

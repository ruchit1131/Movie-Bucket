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
  This is a MERN stack app. html-pdf node module is used to convert html code to PDF file. The Frontend react app is a form in which you can enter your details. By default the watermark will appear above. To remove it just check 'Remove Watermark' box. The client(Frontend) sends the form data to the server(Backend) which uses the data to make an HTML document.The HTML document is rendered to PDF format and sotred on the server. The client requests the saved PDF and saves it in the storage of the user.

## FEATURES

  + Resume uses stylish fonts and icons.
  + 11 different styles available.
  + Custom style your content using html and css. E.g "This is &lt;b&gt; bold &lt;/b&gt; text" will render like  "This is <b> bold </b> text".
  + Add links to github, liknedin, twitter, kaggle, and your own website.
  + Add links to projects.
<br/><br/>

## Setup

### Using Command Line

  + Clone the git repo using "git clone https://github.com/ruchit1131/Resume-Maker-App.git"
  + Move to the git directory using "cd Resume-Maker-App"
  + Change branch to v1.0.1 using "git checkout v1.0.1"
  + Install node_modules using "npm i"
  + Start the server using "nodemon index"
  + Go to http://localhost:5000 and the app should start working
  + To use client and server seperately, install node modules in client folder as well and run command "npm run start". The app should automatically open on "http://localhost:3000" if port 3000 is not busy (Server should be running)

### Without command line

  + Switch to v1.0.1 branch of this repo.
  + Download the code.
  + Follow instructions from 'Using command line' 
<br/><br/>


#### Note: This app was deployed to heroku which zoomed in the pdf. For that reason, the HTML was zoomed out so that it balances on deployment. To reset it, go to documents folder and open index.js. In style tag, change zoom of html element from 0.6 to 1.

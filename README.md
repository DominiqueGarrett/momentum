# momentum
Project 2: Full-stack web application

Deployed Application: [Momentum](https://momentum100.herokuapp.com/)


## Badges
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


## Table of Contents
  * [License](#license)
  * [Description](#description)
  * [User Story](#user-story)
  * [Acceptance Criteria](#user-story)
  * [Installation](#installation)
  * [Setup](#setup)
  * [Usage](#usage)
  * [Screenshots of Application in Use](#screenshots-of-application-in-use)
  * [Technologies](#technologies)
  * [How to Contribute](#how-to-contribute)
  * [Questions?](#questions)


## License
  Read more about MIT here:
  [MIT](https://opensource.org/licenses/MIT)


## Description
  Momentum is a full-stack site where users can drop pushpin location markers in the major hub cities in Texas. With login authentication, logged-in users have access to the dashboard where they can save a location and write a description. Additionallly, this application is MVC structured and makes use of multiple packages such as handlebars, bcrypt, express.sessions, sequelize and more to ensure the most optimized experience.


## User Story
```
AS A person who is new to TX
I WANT to view and save the places I visit
SO THAT I can keep record of the places I enjoy most whenever I'm in major cities in Texas
```


## Acceptance Criteria 
```
GIVEN a CMS-style pushpin site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the dashboard option in the navigation
THEN I am taken to a page where I can see a map, and buttons for the 3 major hub cities in Texas
```


## Installation
  1. To install application, clone the main project via the HTTP or SSH link on github.

```
git clone <SSH>
```

2. Once cloned, open up the project folder in your text editor and run the following command in terminal to install all dependencies.

```
npm install
```


## Setup
Create an '.env' file in the main directory path and include the following data:

```
DB_NAME='cities_db'
DB_USER='root'
DB_PASSWORD=''
DB_SECRET='my_secret'
```

Once your '.env' has been created with the corresponding data, open up the schema ('db/schema.sql') and update the database label to match with the database you included in your '.env' file.


## Usage
  1. Run `npm start` in terminal to start. 

  Note:

  - Need to be in the main folder in terminal when running the command.


## Screenshots of Application in Use

Home Page:

<img width="1434" alt="Screen Shot 2023-01-23 at 12 12 50 PM" src="https://user-images.githubusercontent.com/114618684/214117748-06bc1e5a-8224-4f80-8d0f-d56170a1dfad.png">

Signup:

<img width="1439" alt="Screen Shot 2023-01-23 at 12 13 07 PM" src="https://user-images.githubusercontent.com/114618684/214117881-da8de12d-7cac-4f8d-99ab-6b6394034a79.png">

Login:

<img width="1430" alt="Screen Shot 2023-01-23 at 12 13 16 PM" src="https://user-images.githubusercontent.com/114618684/214117953-9697ebd9-7325-480b-8c63-9baac65dd320.png">

Map:

<img width="1420" alt="Screen Shot 2023-01-23 at 12 13 45 PM" src="https://user-images.githubusercontent.com/114618684/214117978-95101971-a2c9-4ecf-897a-f7fab06efbe2.png">

Current Location:
![screenshot_20230123_063912](https://user-images.githubusercontent.com/114618684/214188909-9f4eec53-59c7-486f-b2a1-4de6fc5d2664.png)

## Technologies
* [Node.js](https://nodejs.org/en/)
* [Express.js](https://expressjs.com)
* [Handlebars Template Engine](https://handlebarsjs.com)
* [Bcrypt](https://www.npmjs.com/package/bcrypt)
* [Sequelize](https://sequelize.org)
* [Dotenv](https://www.npmjs.com/package/dotenv)
* [Heroku](https://devcenter.heroku.com/start)
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [Leaflet](https://leafletjs.com/index.html)
* [Open Street Map](https://www.openstreetmap.org/copyright)



## How to Contribute
  [Contributor Covenant](https://www.contributor-covenant.org/)  


## Questions?
  ### Reach us here: 
  [Dominique Garrett](https://github.com/DominiqueGarrett) | [Amanda Lee](https://github.com/Amandagl1) | [Bictor Perez Okomura](https://github.com/bperez011) |


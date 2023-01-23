# momentum
Project 2: Full-stack web application


# Deployed Application
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
  Momentum is a full-stack site where users can drop pushpin location markers in Dallas, TX. With login authentication, logged-in users have access to the dashboard where they can save a location and write a description. Additionallly, this application is MVC structured and makes use of multiple packages such as handlebars, bcrypt, express.sessions, sequelize and more to ensure the most optimized experience.


## User Story
```
AS A person who is new to Dallas, TX
I WANT to view and save the places I visit
SO THAT I can keep record of the places I enjoy most whenever I'm in Dallas
```


## Acceptance Criteria 
```
GIVEN an option to select Dallas
WHEN I double click the map
THEN a pushpin is dropped/displays on the map
WHEN the pushpin is dropped the coordinates are saved
THEN I am able to enter a name and description
WHEN I log back it at another time, my saved locations, name and description will be there
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

<img width="1437" alt="Screen Shot 2023-01-16 at 4 08 14 PM" src="https://user-images.githubusercontent.com/114618684/213325535-9fee3f8d-c73e-405c-91ba-0758f9264376.png"> 

Login:

<img width="546" alt="Screen Shot 2023-01-16 at 4 08 34 PM" src="https://user-images.githubusercontent.com/114618684/212782646-3bdc65da-bafb-4897-b0c5-7ad2f6c05753.png">

Signup:

<img width="615" alt="Screen Shot 2023-01-16 at 4 08 27 PM" src="https://user-images.githubusercontent.com/114618684/212782698-6ca95ad2-7e5e-47b0-9fb5-fe375465243a.png">

Map: 
----------------INSERT MARKER SCREENSHOTS HERE -------------------
Marker:

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


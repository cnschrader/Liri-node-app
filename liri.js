// initializing dotenv
require("dotenv").config();

// node's built in file system.
const fs = require("fs");

// requiring axios
const axios = require("axios");

// grabbing our api keys
const keys = require("./keys.js");

// spotify npm initialize
const SpotifyPkg = require('node-spotify-api');

// inquire initialize
const inquirer = require('inquirer');

const command = process.argv.shift(2);
const question = process.argv.shift();


// switch statement that will call functions depending on the user's input. 
switch (command) {
    case "find-on-spotify":
    spotify();
    break;

    case "find-on-omdb":
    movies();
    break;

    case "find-the-band":
    bands();
    break;

    default:
};

spotify = (input) => {



}


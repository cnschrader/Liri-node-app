// initializing dotenv
require("dotenv").config();

// node's built in file system.
const fs = require("fs");

// grabbing our api keys
const keys = require("./keys.js");

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


// initializing dotenv
require("dotenv").config();

// node's built in file system.
const fs = require("fs");

// requiring axios
const axios = require("axios");

// grabbing our api keys
const keys = require("./keys.js");

// spotify npm initialize
const Spotify = require('node-spotify-api');


// grabbing the data from the command line
const command = process.argv[2];
process.argv.splice(0, 3);
let question = process.argv;


// switch statement that will call functions depending on the user's input. 
switch (command) {
    case "find-on-spotify":
    spotify(question);
    break;

    case "find-on-omdb":
    movies(question);
    break;

    case "find-the-band":
    bands(question);
    break;

    default:
};



function movies(question) {
question = question.join("+");
console.log(question, 'question');
    if(command === "find-on-omdb"){
    
        axios.get("http://www.omdbapi.com/?t=" + question + "&y=&plot=short&apikey=trilogy")
        .then(
            (response) => {
                console.log("Title: " + response.data.Title);
                console.log("Movie's Rating: " + response.data.imdbRating);
                console.log("Year Released: " + response.data.Year);
                console.log("Actors: " + response.data.Actors);
                console.log("Language: " + response.data.Language);
                console.log("Plot: " + response.data.Plot);

            }
        )
    };

};

function bands(question) {
    console.log(question);
    // question = question.join(" ")

    // if(command === "find-the-band"){
        axios.get("https://rest.bandsintown.com/artists/" + question + "/events?app_id=" + keys.bandsInTown)
        .then(
            (response) => {
                console.log(response);
            }
        )

    // };

};


function spotify(question){
    // if(command === "find-on-spotify"){
    const spotify = new Spotify({
        id: keys.spotify.id,
        secret: keys.spotify.secret
      });
      
      spotify.search({type: "track", query: question.join(" ")},function(err, data) {
        console.log(JSON.stringify(data, null, 2)); 
      })
      /*
      .request('https://api.spotify.com/v1/tracks/' + question + keys.spotify)
  .then(function(data) {
    console.log(data); 
  })
  .catch(function(err) {
    console.error('Error occurred: ' + err); 
  });
  */
//};
};

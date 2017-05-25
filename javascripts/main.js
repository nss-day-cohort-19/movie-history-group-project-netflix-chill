"use strict";

console.log("main.js");

let $ = require('jquery'),
    ds = require("./data-station"),
    templates = require("./DOM-builder");
    //user = require("./user");

function loadMoviesToDom (movieData) {
	console.log("loading movies");
	templates.showSearchedMovies(movieData.results);
}









module.exports = {loadMoviesToDom};
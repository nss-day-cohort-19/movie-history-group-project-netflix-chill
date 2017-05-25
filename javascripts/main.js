"use strict";

console.log("main.js");

let $ = require('jquery'),
    ds = require("./data-station"),
    DOM = require("./DOM-builder"),
    dataStation = require("./data-station");
    //user = require("./user");

function loadMoviesToDom (movieData) {
	console.log("loading movies");
	DOM.showSearchedMovies(movieData.results);
}

$("#untracked").click( () => {
	ds.search($("#input").val());
	console.log($("#input").val());
});
$("#untracked").click( () => {
	ds.search($("#input").val());
});

$("#input").keyup(function(e) {
	if (e.keyCode === 13){
		dataStation.getMovies()
		.then(function(movieData){
			DOM.showSearchedMovies(movieData);
		}).then(function(movieData){
			DOM.showActors(movieData);
		});
	}
});






module.exports = {loadMoviesToDom};
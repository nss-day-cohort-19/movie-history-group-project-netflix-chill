"use strict";

// This module has no knowledge of the DOM, or where the data goes after it is fetched from Firebase.
// It is only concerned with getting and setting data in the db


let $ = require('jquery'),
	firebase = require("./firebaseConfig"),
	main = require("./main");


$("#input").keyup(function(e) {
	if (e.keyCode === 13){
		getMovies()
		.then(loadMoviesToDom);
	}
});

function getMovies () {
	let inpValue = $("#input").val();
	console.log(inpValue);
	let search = encodeURI(inpValue);
	console.log(`https://api.themoviedb.org/3/search/movie?api_key=47aba330717dafc42c10c5b12ee7923a&language=en-US&query=${search}&page=1&include_adult=false`);
	//let searchInput = "batman";
	return new Promise (function(resolve, reject) {
		$.ajax({
			url: `https://api.themoviedb.org/3/search/movie?api_key=47aba330717dafc42c10c5b12ee7923a&language=en-US&query=${search}&page=1&include_adult=false`
		}).done(function(movieData){
			resolve(movieData);
			console.log(movieData);
		}).fail(function(error){
			reject(error);
		});
	});
}



module.exports = {getMovies};
"use strict";
console.log("data-station.js");
// This module has no knowledge of the DOM, or where the data goes after it is fetched from Firebase.
// It is only concerned with getting and setting data in the db


let $ = require('jquery'),
	firebase = require("./firebaseConfig"),
	main = require("./main"),
	DOM = require("./DOM-builder");


$("#input").keyup(function(e) {
	if (e.keyCode === 13){
		getMovies()
		.then(function(movieData){
			DOM.showSearchedMovies(movieData.results);
		}).then(function(movieData){
			DOM.showActors(movieData);
		});
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
		//getActors();
	});
}

// function getActors () {
// 	let id =
// 	return new Promise (function(resolve, reject){
// 		$.ajax({
// 			url: `https://api.themoviedb.org/3/movie/${id}/credits?api_key=47aba330717dafc42c10c5b12ee7923a`
// 		}).done(function(actorData){
// 			resolve(actorData);
// 			console.log(actorData);
// 		}).fail(function(error){
// 			reject(error);
// 		});
// 	});
// }



function addToWatchlist(movieObject){
	console.log("movieObject", movieObject);
	return new Promise(function(resolve, reject){
		$.ajax({
			url:`${firebase.getFBsettings().databaseURL}/movies.json`,
			type: 'POST',
			data: JSON.stringify(movieObject),
			dataType: 'json'
		}).done(function(movieId){
			resolve(movieId);
			console.log("movieId", movieId);
		});
	});
}


module.exports = {getMovies, addToWatchlist};





"use strict";
console.log("data-station.js");
// This module has no knowledge of the DOM, or where the data goes after it is fetched from Firebase.
// It is only concerned with getting and setting data in the db


let $ = require('jquery'),
	firebase = require("./firebaseConfig"),
	key = require("./fb-getter"),
	main = require("./main"),
	movieKey = key.getMovieKey(),
	user = require("./user"),
	apiKey = movieKey.apiKey,
	databaseURL = movieKey.databaseURL;


function getMovies () {
	let inpValue = $("#input").val();
	console.log(inpValue);
	let search = encodeURI(inpValue);
	//let searchInput = "batman";
	return new Promise (function(resolve, reject) {
		$.ajax({
			url: `${databaseURL}/search/movie?api_key=${apiKey}&language=en-US&query=${search}&page=1&include_adult=false`
		}).done(function(movieData){
			let movies = movieData.results;
			for(let i = 0; i < movies.length; i++) {
				movies[i].actorList = [];
			}
			resolve(movies);
		}).fail(function(error){
			reject(error);
		});

	});
}

 //get new movie credits from movie db api
function getNewMoviesCredits(movieId) {
	return new Promise(function(resolve,reject){
		$.ajax({
			url:`${databaseURL}/movie/${movieId}/credits?api_key=${apiKey}&language=en-US&page=1&include_adult=false`
		}).done(function(movieData){
			resolve (movieData);
		});
	});

}

//get my movies from firebase
function getMyMovies(user) {
	return new Promise(function(resolve,reject){
		$.ajax({
			url:`${firebase.getFBsettings().databaseURL}/movies.json?orderBy="uid"&equalTo="${user.getUser()}"`
		}).done(function(movieData){
			resolve(movieData);
		});
	});

}

function addMovie(movieObj) {
	console.log("add movie", movieObj);
	return new Promise(function(resolve, reject){
		$.ajax({
			url:`${firebase.getFBsettings().databaseURL}/movies.json`,
			type: 'POST',
			data: JSON.stringify(movieObj),//stringify prepares our object for json format
			dataType: 'json'
		}).done(function(movieId){
			resolve(movieId);
		});
	});

}
// POST - Submits data to be processed to a specified resource. Takes one parameter.

function deleteMovie(movieId) {
	return new Promise(function(resolve, reject){
		$.ajax({
			url:`${firebase.getFBsettings().databaseURL}/songs/${movieId}.json`,
			method:'DELETE'
		}).done(function(){
			resolve();//resolve goes to delete when delete button is clicked
		});
	});

}

function getMovie(movieId) {
	return new Promise(function(resolve, reject){
		$.ajax({
			url:`${firebase.getFBsettings().databaseURL}/movies/${movieId}.json`
		}).done(function(movieData){
			resolve(movieData);
		}).fail(function(error){
			reject(error);
		});
	});
}

// GET - Requests/read data from a specified resource
// PUT - Update data to a specified resource. Takes two parameters.
//PATCH - update only the changes
function setRating(movieObj, movieId, rating) {
	return new Promise(function(resolve,reject){
		$.ajax({
			url:`${firebase.getFBsettings().databaseURL}/movies/${movieId}.json`,
			type:'PATCH',
			data:JSON.stringify(movieObj)
		}).done(function(data){
			resolve(data);
		});
	});
}

function compareMovies(newMovies) {
	return new Promise(function(resolve, reject) {
		$.ajax({
			url: `${firebase.getFBsettings().databaseURL}/movies.json?orderBy="uid"&equalTo="${user.getUser()}"`,
		}).done( function(data) {
			console.log(data, "data", newMovies, "newMovies");
			for(let m in newMovies) {
				for(let d in data) {
					if(data[d].movieId == newMovies[m].id) {
						newMovies.splice(m, 1);
						break;
					}
				}
			}
			resolve(newMovies);
		});
	});
}

module.exports = {
  getMovies,//query movie db api
  getNewMoviesCredits, //query movie db for actors
  getMyMovies,//query firebase
  addMovie,//add to watchlist
  deleteMovie, //delete from firebase
  setRating,
  compareMovies};





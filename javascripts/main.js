"use strict";

console.log("main.js");

let $ = require('jquery'),
    ds = require("./data-station"),
    DOM = require("./DOM-builder"),
    dataStation = require("./data-station"),
    user = require("./user"),
    rate = require('./rating');

function loadMoviesToDom (movieData) {
	console.log("loading movies");
	DOM.matchMovies(movieData.results);
}

function buildMovieObj(id) {
    let movieObj = {
    name: id.data("title"),
    actors: id.data("actors"),
    year: id.data("year"),
    picture: id.data("picture"),
    watched: false,
    rating: 0,
    uid: user.getUser(),
    movieId: id.data("id")
  };
  console.log(movieObj);
  return movieObj;
}

$("#untracked").click( () => {
	dataStation.getMovies()
	.then(function(movieData){
		DOM.matchMovies(movieData);
	});
});

$("#input").keyup(function(e) {
	if (e.keyCode === 13){
		dataStation.getMovies()
		.then(function(movieData){
        DOM.matchMovies(movieData);
		});
	}
});

$("#auth-btn").click(function(){
  console.log("clicked on auth-btn");
  user.logInGoogle()
  .then(function(result){
    console.log("result from login", result.user.uid);
    user.setUser(result.user.uid);
    //let currentUser = user.getUser();
    //loadMoviesToDom(currentUser);
    $('#thingsToHide').show();
    $('#welcome').hide();
  });
});

$("#logout").click(function(){
   console.log("clicked logout button");
   user.logOut()
   .then(function(result){
     console.log("you have logged out");
     $('#thingsToHide').hide();
     $('#welcome').show();
   });
 });
$('#thingsToHide').hide();

$(".delete-btn").on("click", (event) => {
	dataStation.deleteMovie($(this).data("delete-id")).
	then( /*Load movies to dom again */);
});


$(document).on('click', '.star', function(e) {
    // console.log(e.target);
    rate.starStuff(e.target);
});
$(document).on('click', '.unwatched', function(event) {
    let movie = buildMovieObj($(this));
	rate.addStars(event);
	dataStation.addMovie(movie).
	then( /*Load movies to dom again */);
});


module.exports = {loadMoviesToDom};
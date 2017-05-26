"use strict";

console.log("main.js");

let $ = require('jquery'),
    ds = require("./data-station"),
    DOM = require("./DOM-builder"),
    dataStation = require("./data-station"),
    user = require("./user"),
    rate = require('./rating');

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


$(document).on('click', '.star', function(event) {

    let movie = {};
    let movieId = $(this).closest('div').data('i');
    movie.watched = true;
    movie.rating = rate.starStuff(event.target);
    dataStation.setRating(movieId, movie).then( function(data) {
        console.log(data);
    });
});
$(document).on('click', '.unwatched', function(event) {
    let movie = buildMovieObj($(this));
	dataStation.addMovie(movie);
    $(event.target).closest('.deleter').remove();
	// then( /*Load movies to dom again */);
});
$(document).on('click', '#showUnwatched', function(){
    dataStation.getMyMovies().then(function(data) {
        return DOM.showUserMovies(data);
    }
    );
});
$(document).on('click', '#showWatched', function(){
    dataStation.getMyMovies().then(function(data) {
        return DOM.showWatchedMovies(data);
    }
    );
});


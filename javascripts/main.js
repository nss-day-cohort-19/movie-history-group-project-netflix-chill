"use strict";



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
    return movieObj;
}

$("#input").keyup(function(e) {
	if (e.keyCode === 13){
		dataStation.getMovies()
		.then(function(movieData){
        DOM.matchMovies(movieData);
		});
	}
});

$("#auth-btn").click(function(){
  user.logInGoogle()
  .then(function(result){
    user.setUser(result.user.uid);
    //let currentUser = user.getUser();
    //loadMoviesToDom(currentUser);
    $('#thingsToHide').show();
    $('#welcome').hide();
  });
});

$("#logout").click(function(){
   user.logOut()
   .then(function(result){
     $('#thingsToHide').hide();
     $('#welcome').show();
   });
 });
$('#thingsToHide').hide();

$(document).on('click', '.delete-btn', function(event) {
	dataStation.deleteMovie($(this).data("i")).
	then( showMyMovies);
});


$(document).on('click', '.star', function(event) {
    //     rate.starStuff();
});
$(document).on('click', '.unwatched', function(event) {
    let movie = buildMovieObj($(this));
	// rate.addStars(event);
	dataStation.addMovie(movie);
    $(event.target).closest('.deleter').remove();
	// then( /*Load movies to dom again */);
});
$(document).on('click', '#showUnwatched', function(){
    showMyMovies();
});
$(document).on('click', '#showUntracked', function(){
    $("#display").html("");
    dataStation.getMovies()
	.then(function(movieData){
    DOM.matchMovies(movieData);
	});
});

function showMyMovies() {
	dataStation.getMyMovies().then(function(data) {
        return DOM.showUserMovies(data);
    });
}
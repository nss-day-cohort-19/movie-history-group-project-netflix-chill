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
    $("#mainContainer").removeClass("hide");
    $("#auth-btn").addClass("hide");
    $("#logout").removeClass("hide");

  });
});

$("#logout").click(function(){
   console.log("clicked logout button");
   user.logOut()
   .then(function(result){
     console.log("you have logged out");
     $("#auth-btn").removeClass("hide");
     $("#logout").addClass("hide");
     $("#mainContainer").addClass("hide");
   });
 });

$(document).on('click', '.star', function(e) {
    // console.log(e.target);
    rate.starStuff(e.target);
});
$(document).on('click', '.unwatched', function(event) {
    // console.log(e.target);
    rate.addStars(event);
});


module.exports = {loadMoviesToDom};
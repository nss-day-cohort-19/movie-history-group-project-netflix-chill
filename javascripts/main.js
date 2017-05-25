"use strict";

console.log("main.js");

let $ = require('jquery'),
    ds = require("./data-station"),
    DOM = require("./DOM-builder"),
    dataStation = require("./data-station"),
    user = require("./user");

function loadMoviesToDom (movieData) {
	console.log("loading movies");
	//templates.showSearchedMovies(movieData.results);
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
			DOM.showSearchedMovies(movieData.results);
		}).then(function(movieData){
			DOM.showActors(movieData);
		});
	}
});

$("#auth-btn").click(function(){
  console.log("clicked on auth-btn");
  user.logInGoogle()
  .then(function(result){
    console.log("result from login", result.user.uid);
    user.setUser(result.user.uid);
    loadMoviesToDom();
    $("#auth-btn").addClass("hide");
    $("#logout").removeClass("hide");

  });
});

$("#logout").click(function(){
   console.log("clicked logout button");
   user.logOut()
   .then(function(result){
     console.log("you have logged out");
   });
 });






module.exports = {loadMoviesToDom};
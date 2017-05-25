"use strict";
// This module only cares about the data it receives. It doesn't have to know about where the data comes from.

let $ = require('jquery'),
	dataStation = require("./data-station");


function matchMovies(movieList) {
	let mainDiv = $(".container");
	var actors = {};
	for (var i = 0; i < movieList.length; i++){
		dataStation.getNewMoviesCredits(movieList[i].id).
		then(
			(data) => {
				var actorObj = {};
				for(let j = 0; j < 3; j++) {
					if(data.cast[j]){
						let d = data.cast[j]; //i like to shorten this kind of stuff
						actorObj[j] = {"part": d.character, "name": d.name};
					}
				}
				actors[data.id] = actorObj;
				if(data.id == movieList[i - 1].id) {
					matchActors(actors, movieList);
				}
			},
			() => {console.log("error");}
		);
  }
}

function showSearchedMovies (movieList) {
	console.log("showSearchedMovies", movieList.length);
	  let mainDiv = $(".container");
	  let actorArray = [];
	  for (var i = 0; i < movieList.length; i++){
			if (movieList[i].poster_path !== null) {
				mainDiv.append(`<div class="col lg2 m4 s6">
												<div class="card">
												<div class="card-image"> <span> <div class="chip right"> <i class="close material-icons">close</i> </div> </span> <img class="cardImages" src="http://image.tmdb.org/t/p/w342/${movieList[i].poster_path}" alt="{{title}}"> </div>
												<div class="card-content">
												<li>${movieList[i].title}</li>
												<li>${movieList[i].release_date}</li>
												<a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a> </div>
												</div>`);
			  actorArray.push(`${movieList[i].id}`);
			}
	}
}

function matchActors(actors, movies) {
	for(let m = 0; m < movies.length; m++) {
		movies[m].actorList = actors[movies[m].id];
	}
	console.log(movies);
  showSearchedMovies(movies);
}

module.exports = {matchMovies};

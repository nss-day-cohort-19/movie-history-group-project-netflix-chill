"use strict";
// This module only cares about the data it receives. It doesn't have to know about where the data comes from.

let $ = require('jquery'),
	dataStation = require("./data-station"),
	rate = require('./rating');


function matchMovies(movieList) {
	let mainDiv = $(".container");
	var actors = {};
	function parseActors (data) {
		var actorObj = {};
			for(let j = 0; j < 3; j++) {
				if(data.cast[j]){
					let d = data.cast[j]; //i like to shorten this kind of stuff
					actorObj[j] = {"part": d.character, "name": d.name};
				}
			}
			for (var prop in actorObj) {
				if (actorObj[prop] !== undefined) {
						actors[data.id] = actorObj;
				}

			}
			if(data.id == movieList[i - 1].id) {
				matchActors(actors, movieList);
			}
	}
	for (var i = 0; i < movieList.length; i++){
		dataStation.getNewMoviesCredits(movieList[i].id).
		then(
			parseActors
		);
  }
}

function matchActors(actors, movies) {
	for(let m = 0; m < movies.length; m++) {
		movies[m].actorList = actors[movies[m].id];
	}
	dataStation.compareMovies(movies).
	then(
  		showSearchedMovies
  	);
}
function showSearchedMovies (movieList) {
	  let mainDiv = $("#display");
	  let actorArray = [];
	  for (var i = 0; i < movieList.length; i++){
			if (movieList[i].actorList !== undefined && movieList[i].poster_path !== null){
				let actorString = "";
				for(let j in movieList[i].actorList) {
					actorString += movieList[i].actorList[j].name + ", ";
				}
				actorString = actorString.slice(0, -2);
				mainDiv.append(`<div class="col lg2 m4 s6 deleter">
												<div class="card">
												<div class="card-image"><img class="cardImages" src="http://image.tmdb.org/t/p/w342/${movieList[i].poster_path}" alt="{{title}}"> </div>
												<div class="card-content">
												<li>${movieList[i].title}</li>
												<li>${movieList[i].release_date}</li>
												<li>${actorString}</li>
                        <div id="watchlistDiv">
													<a class="unwatched" data-title= "${movieList[i].title}" data-actors= "${actorString}" data-year= "${movieList[i].release_date}" data-picture= "${movieList[i].poster_path}" data-id= ${movieList[i].id}>Add to Watchlist</a>
												</div>
												</div>`);
			  actorArray.push(`${movieList[i].id}`);
			}
	}
}

function showUserMovies(data) {
	let mainDiv = $(".containers");
	mainDiv.html("");
	for(let i in data) {
		if(!data[i].watched) {
			mainDiv.append(`<div class="col lg2 m4 s6 deleter">
											<div class="card">
											<div class="card-image"> <span> <div class="chip right"> <i class="close material-icons">close</i> </div> </span> <img class="cardImages" src="http://image.tmdb.org/t/p/w342/${data[i].picture}" alt="{{title}}"> </div>
											<div class="card-content">
											<li>${data[i].name}</li>
											<li>${data[i].year}</li>
											<li>${data[i].actors}</li>
											<div class="rating" data-i= "${i}">
											<span class="star" id="tenStar">☆</span>
											<span class="star" id="nineStar">☆</span>
											<span class="star" id="eightStar">☆</span>
											<span class="star" id="sevenStar">☆</span>
											<span class="star" id="sixStar">☆</span>
											<span class="star" id="fiveStar">☆</span>
											<span class="star" id="fourStar">☆</span>
											<span class="star" id="threeStar">☆</span>
											<span class="star" id="twoStar">☆</span>
											<span class="star" id="oneStar">☆</span>
											</div>
											</div>
											</div>`);
		}
	}
}

function showWatchedMovies(data) {
	let mainDiv = $(".containers");
	mainDiv.html("");


	for(let i in data) {
		if(data[i].watched) {
			mainDiv.append(`<div class="col lg2 m4 s6 deleter">
											<div class="card">
											<div class="card-image"> <span> <div class="chip right"> <i class="close material-icons">close</i> </div> </span> <img class="cardImages" src="http://image.tmdb.org/t/p/w342/${data[i].picture}" alt="{{title}}"> </div>
											<div class="card-content">
											<li>${data[i].name}</li>
											<li>${data[i].year}</li>
											<li>${data[i].actors}</li>
											<div class="rating" data-i= "${i}">
											
											</div>
											</div>
											</div>`);
		}

	}
}

module.exports = {matchMovies, showUserMovies, showWatchedMovies};

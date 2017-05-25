"use strict";
// This module only cares about the data it receives. It doesn't have to know about where the data comes from.

let $ = require('jquery');


function showSearchedMovies(movieList) {
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

	  console.log("actorArray", actorArray);
}

function showActors(actorList) {
	console.log("showSearchedMovies");
	  let row = $(".row");
	  for (var i = 0; i < actorList.length; i++){

	  row.append(`<div class="col s4">${actorList[i].name}</div>`);
	}
}

module.exports = {showSearchedMovies};

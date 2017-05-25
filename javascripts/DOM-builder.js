"use strict";
// This module only cares about the data it receives. It doesn't have to know about where the data comes from.

let $ = require('jquery');
console.log("DOM builder");


function showSearchedMovies(movieList) {
	console.log("showSearchedMovies", movieList.length);
	  let mainDiv = $(".container");
	  let actorArray = [];
	  for (var i = 0; i < movieList.length; i++){

	  mainDiv.append(`<div class="row">
					<div class="col s4">${movieList[i].title}</div>
					<div class="col s4">${movieList[i].release_date}</div>
					</div>`);

	  actorArray.push(`${movieList[i].id}`);
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











  // $("container").html($songsDisplay);
  // for (let song in songList ) {
  //   let currentSong = songList[song],
  //       songListItem = $("<li>", {class: "song-list__item"}),
  //       title = $("<span/>", {class: "song-title"}).text(currentSong.title),
  //       songListData = $("<ul/>", {class: "song-list__item--data"}),
  //       songListEdit = $("<a>", {"data-edit-id": song, class: "edit-btn waves-effect waves-light btn", text: "edit" }),
  //       songListDelete = $("<a>", {"data-delete-id": song, class: "delete-btn waves-effect waves-light btn", text: "delete" });
  //       // Same as `<a id="${song}" class="delete-btn waves-effect waves-light btn">delete</a>`

  //   songListData.append(
  //     `<li>${currentSong.artist}</li>
  //     <li>${currentSong.album}</li>
  //     <li>${currentSong.year}</li>`);

  //   $(".song-list").append(songListItem.append(title));
  //   $(".song-list").append(songListItem.append(songListData).append(songListDelete).append(songListEdit));
  // }



module.exports = {showSearchedMovies};




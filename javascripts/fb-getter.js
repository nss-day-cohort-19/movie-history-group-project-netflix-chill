"use strict";


function getFBKey() {
  return {
    apiKey: "AIzaSyDIaLv6OZF-uqjLkHDRm7-vMa7F_H-x9JM",
    authDomain: "netflix-n-chill-169ed.firebaseapp.com",
    databaseURL: "https://netflix-n-chill-169ed.firebaseio.com",
    projectId: "netflix-n-chill-169ed",
    storageBucket: "netflix-n-chill-169ed.appspot.com",
    messagingSenderId: "610087153481"
  };
}

 function getMovieKey() {
   return {
     apiKey: "47aba330717dafc42c10c5b12ee7923a",
     databaseURL: "https://api.themoviedb.org/3"
 	};
 }

module.exports = {getFBKey, getMovieKey};
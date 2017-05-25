"use strict";
let firebase = require("./firebaseConfig"),
	provider = new firebase.auth.GoogleAuthProvider(),
	currentUser = null;

function logInGoogle() {
	return firebase.auth().signInWithPopup(provider);
}

firebase.auth().onAuthStateChanged(function(user){
	console.log("onAuthStateChanged", user);
	if(user){
		currentUser = user.uid;
	}else{
		currentUser = null;
		console.log("NO USER LOGGED IN");
	}
});

function logOut(){
	return firebase.auth().signOut();
}

function setUser(value){
	currentUser = value;
}

function getUser(){
	return currentUser;
}

module.exports = {logInGoogle, logOut, setUser, getUser};
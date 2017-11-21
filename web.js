/* 
	JavaScript File

	SunOptics Website
	
	Author: Elijah Trent
	
	Date: 11/20/17
	
	Filename: web.js
	
*/

"use strict"; // interprets document in JavaScript strict mode

var waitForUser;

function geoTest() {
	
	waitForUser = setTimeout(fail, 10000); // waits on user for 10 seconds and calls the fail function at end of countdown
	
	if (navigator.geolocation) {
		
	navigator.geolocation.getCurrentPosition(createMap, fail); // createMap function is called when geolocation succeeds 
	
	} else {
		
		fail(); // called when geolocation fails
		
	}
	
}
	
function createMap(position) {
	
	clearTimeout(waitForUser); // ends the waitForUser timeout
	
	var Lat = position.coords.latitude; // grabs users current latitude
	
	var Lng = position.coords.longitude; // grabs users current longitude
	
	var mapOptions = { // required parameters for map
		
		center: new google.maps.LatLng(Lat, Lng), // positions the map at current latitude and longitude
		
		zoom: 10 // zooms into map at a level of 10
		
	};
	
	var map = new google.maps.Map(document.getElementById("map"), mapOptions); // calls upon google maps function to provide map
	
	document.getElementsByTagName("li")[12].innerHTML = "Latitude: " + position.coords.latitude; // provides current latitude to user
	
	document.getElementsByTagName("li")[13].innerHTML = "Longitude: " + position.coords.longitude; // provides current longitude to user
	
	document.getElementsByTagName("li")[14].innerHTML = "Altitude: " + position.coords.altitude; // provides current altitude to user
	
}

function fail() {
		
	document.getElementById("map").innerHTML = "Unable to access your current location"; // provides message if browser fails to display map
	
}




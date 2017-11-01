/* File Name: rewards1.js
   Author: Elijah Trent
   Date: 10/30/17 
   
  This code will input a date format and estimate the time since the last purchase
*/

"use strict" //interprets contents in JavaScript strict mode

// Global Declarations

var selection = document.getElementById("dateSelected"); // pulls result from user date selection

var result = document.getElementById("elapsedTime"); // creates a variable the will put result of elapsed time into ID


function elapsedTime() {
	
	var fullDateToday = new Date();
	
	var dateToday = Date(fullDateToday.getDay());
	
	selectedDate = new Date(selection.getDay());
	
	var daysFrom = Math.floor((dateToday - selectedDate) / 86400000);
	
	document.getElementById("elapsedTime").innerHTML = daysFrom;
	
}

function creatEventListener() { // creates event listener for button
	
	var submitButton = document.getElementById("button");
	
	if (submitButton.addEventListener) {
		
		submitButton.addEventListener("click", elapsedTime, false);
		
	} else if (submitButton.attachEvent) {
		
		submitButton.attachEvent("onclick", elapsedTime);
		
	}
	document.getElementById("dateSelected").value = "";
	
	// clear last starting value
	
	document.getElementById("elapsedTime").innerHTML = "";
	
	// clears previous results
	
}

if (window.addEventListener) {
	
	window.addEventListener("load", creatEventListener, false);

} else if (window.attachEvent) {
	
	window.attachEvent("onload", creatEventListener);
	
}

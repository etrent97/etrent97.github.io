/* File Name: rewards.js
   Author: Elijah Trent
   Date: 10/23/17 
   
   This is the new updated form validation page
   
   indicates all fields need to be filled out when the page loads and sets the state selector to non default
*/

"use strict" // interprets content in JavaScript strict mode

// global variable

var formValidity = true;

/* function will validate required fields */

function validateRequired() {
	
	var inputElements = document.querySelector("form"); // calls upon form tag and all the inputs within
	
	var errorDiv = document.getElementById("errorText"); // grabs the error text and puts in a variable called errorDiv
	
	var elementCount = inputElements.length;
	
	var requiredValidity = true; // sets validity to true
	
	var currentElement;
	
	try {
		
		for (var i = 0; i < elementCount; i++) { // uses for loop to iterate through the input boxes checking validation
			
			currentElement = inputElements[i];
			
			if (currentElement.value === "") {
				
				currentElement.style.background = "rgb(255,233,233)"; // sets the background of the input boxes to red if false
				
				requiredValidity = false;
				
			} else {
				
				currentElement.style.background = "white"; 
				
			}
			
		}
		
		if (requiredValidity === false) {
			
			throw "Please complete all fields."; // throws statement when form is not valid
			
		}
		
		errorDiv.style.display = "none"; // styles the error message
		
		errorDiv.innerHTML = ""; 
		
		}
		
		catch(msg) {
			
			errorDiv.style.display = "block";
			
			errorDiv.innerHTML = msg;
			
			formValidity = false;
			
		}
}

/* validate form */

function validateForm(evt) { // fires event when submit button is clicked
	
	if (evt.preventDefault) { // blocks action associated with event
		
		evt.preventDefault(); // prevents form from submitting
		
	} else {
		
		evt.returnValue = false; // prevents from submitting in IE8
		
	}
	
	formValidity = true; 
	
	validateRequired();
	
	if (formValidity === true) {
		
		document.getElementsByTagName("form")[0].submit();
	}
}

/* create event listeners */

function createEventListeners() { // this code creates an event listener on the submit event
	
	var form = document.getElementsByTagName("form")[0];
	
	if (form.addEventListener) {
		
		form.addEventListener("submit", validateForm, false); // triggers the validateForm function
		
	} else if (form.attachEvent) {
		
		form.attachEvent("onsubmit", validateForm);
		
	}
	
}

/* run setup functions when page finished loading */

if (window.addEventListener) {
	
	window.addEventListener("load", createEventListeners, false);
	
} else if (window.attachEvent) {
	
	window.attachEvent("onload", createEventListeners);
	
}

/* removes default values from state selection list */

function removeStateDefaults() {
	
	var emptyBox = document.getElementsByTagName("select"); // calls on the value within the select tag
	
	for (var i = 0; emptyBox.length; i++) { // uses for loop to call on i value which will iterate each time it is less than emptyBox
		
		emptyBox[i].selectedIndex = -1; // turns the emotyBox value to -1 to make it empty
	
	}
}

/* run setup function when page loads */

if (window.addEventListener) { // calls on event listener when page loads and runs function
	
	window.addEventListener("load", removeStateDefaults, false);
	
} else if (window.attachEvent) {
	
	window.attachEvent("onload", removeStateDefaults);
	
}
















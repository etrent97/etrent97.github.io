/*This code will validate wether the users has entered in information
for the first name, last name, or email and if not then an error message
will pop up as an alert window.

Author: Elijah Trent
Date: 10/2/17

*/



/* validates input for if the first name was entered */

function validateFName() {
	
	try {
		
		var firstName = document.getElementById("myFName"); //grabs input from form
		
		if (firstName.value === "") { //checks if text was entered into input box
			
			throw "Please enter first name.";
			
		}
		
	}
	
	catch(fNameError) {
		
		window.alert(fNameError); //pops up a window alert with the above text
		
		return false;
		
	}
	
	finally {
		
		fNameValid = true;
		
	}
	
	return true;

}
var submitButton = document.getElementById("mySubmit"); //uses an event listener for the submit button

if (submitButton.addEventListener) {
	
	submitButton.addEventListener("click", validateFName,false);
	
	}
	
else if (submitButton.attachEvent) {
	
	submitButton.attachEvent("onclick",validateFName);
	
}

/* validates input for if last name was entered */
	
function validateLName() {
	
	try {
		
		var lastName = document.getElementById("myLName"); //grabs input from form
		
		if (lastName.value === "") {
			
			throw "Please enter last name."; 
			
		}
		
	}
	
	catch(lNameError) {
		
		window.alert(lNameError); //pops up a window alert with the above text
		
		return false;
		
	}
	
	finally {
		
		lNameValid = true;
		
	}
	
	return true;

}
var submitButton = document.getElementById("mySubmit"); //uses an event listener for the submit button

if (submitButton.addEventListener) {
	
	submitButton.addEventListener("click", validateLName,false);
	
	}
	
else if (submitButton.attachEvent) {
	
	submitButton.attachEvent("onclick",validateLName);
	
}	

/* validates input for if email was entered */

function validateEmail() { 
	
	try {
		
		var email = document.getElementById("myEmail"); //grabs input from form
		
		if (email.value === "") { //checks if text was entered into input box
			
			throw "Please enter a valid email address.";
			
		}
		
	}
	
	catch(emailError) {
		
		window.alert(emailError); //pops up a window alert with the above text
		
		return false;
		
	}
	
	finally {
		
		emailValid = true;
		
	}
	
	return true;

}
var submitButton = document.getElementById("mySubmit"); //uses an event listener for the submit button

if (submitButton.addEventListener) {
	
	submitButton.addEventListener("click", validateEmail,false);
	
	}
	
else if (submitButton.attachEvent) {
	
	submitButton.attachEvent("onclick",validateEmail);
	
}	

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

/* JavaScript File

	SunOptics Website
	
	Author: Elijah Trent
	
	Date: 11/13/17
	
	Filename: rewards1.js
	
*/

"use strict" // interprets document in JavaScript strict mode


var formValidity = true;

/* Validates email address */

function validateEmail() {
	
   var emailInput = document.getElementById("email");
   
   var errorDiv = document.getElementById("emailError");
   
   var emailCheck = /^[_\w\-]+(\.[_\w\-]+)*@[\w\-]+(\.[\w\-]+)*(\.[\D]{2,6})$/; //requires @ sign and domain name
   
   try {
	  
		  
		if (emailCheck.test(emailInput.value) === false) {
			
				
		  throw "Please provide a valide email address";
		  
		 
		  
	  }
	  
      // remove any email error styling and message
      emailInput.style.background = "";
	  
      errorDiv.innerHTML = "";
	  
      errorDiv.style.display = "none";
	  
      // convert email address to lowercase
	  
	  emailInput.value = emailInput.value.toLowerCase();

   }
   
   catch(msg) {
	   
      // display error message
      errorDiv.innerHTML = msg;
	  
      errorDiv.style.display = "block";
	  
      // change input style
      emailInput.style.background = "rgb(255,233,233)";
   }
   
}

/* Validates phone number */ 

function validatePhone() {
	
   var phoneInput = document.getElementById("phone");
   
   var errorDiv = document.getElementById("phoneError");
   
   var phoneCheck = /(\+0?1\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/; //requires (###) ###-####
   
   try {
		  
		if (phoneCheck.test(phoneInput.value) === false) {
		
		  throw "Please provide in valid 10 digit format: (###) ### - ####";
		  
	  }
	  
      // remove any phone error styling and message
      phoneInput.style.background = "";
	  
      errorDiv.innerHTML = "";
	  
      errorDiv.style.display = "none";

   }
   
   catch(msg) {
	   
      // display error message
      errorDiv.innerHTML = msg;
	  
      errorDiv.style.display = "block";
	  
      // change input style
      phoneInput.style.background = "rgb(255,233,233)";
   }
   
}

/* Validates zip code */

function validateZip() {
	
   var zipInput = document.getElementById("zip");
   
   var errorDiv = document.getElementById("zipError");
   
   var zipCheck = /^\d{5}$/; //requires 5 digit number
   
 
   
   try {
		  
		if (zipCheck.test(zipInput.value) === false) {
		  
	
		  
		  throw "Please provide a 5 digit zip code";
		  
		 
	  }
	  
      // remove any phone error styling and message
      zipInput.style.background = "";
	  
      errorDiv.innerHTML = "";
	  
      errorDiv.style.display = "none";

   }
   
   catch(msg) {
	   
      // display error message
      errorDiv.innerHTML = msg;
	  
      errorDiv.style.display = "block";
	  
      // change input style
      zipInput.style.background = "rgb(255,233,233)";
   }
   
}

/* Validates physical address */

function validateAddress() {
	
   var addressInput = document.getElementById("address");
   
   var errorDiv = document.getElementById("addressError");
   
   var addressCheck = /\d{1,5}\s\w\s(\b\w*\b\s){1,2}\w*\./; //requires valid email address 123 N Cherry St.
   
   try {
	  
		  
		if (addressCheck.test(addressInput.value) === false) {
			
		  throw "Please provide a valide address: 123 S Cherry St.";
		  
	  }
	  
      // remove any email error styling and message
      addressInput.style.background = "";
	  
      errorDiv.innerHTML = "";
	  
      errorDiv.style.display = "none";
	  
   }
   
   catch(msg) {
	   
      // display error message
      errorDiv.innerHTML = msg;
	  
      errorDiv.style.display = "block";
	  
      // change input style
      addressInput.style.background = "rgb(255,233,233)";
   }
   
   
}

/* Creates event listeners */

function createEventListeners() {
	
   var emailInput = document.getElementById("email");
   
   if (emailInput.addEventListener) {
  
      emailInput.addEventListener("change", validateEmail, false); 
  
   } else if (emailInput.attachEvent) {
    
      emailInput.attachEvent("onchange", validateEmail);
   
   }
   
   var phoneInput = document.getElementById("phone");
   
   if (phoneInput.addEventListener) {
	   
	   phoneInput.addEventListener("change", validatePhone, false);
	   
   } else if (phoneInput.attachEvent) {
	   
	   phoneInput.attachEvent("onchange", validatePhone);
	   
   }
   
   var zipInput = document.getElementById("zip");
   
   if (zipInput.addEventListener) {
	   
	   zipInput.addEventListener("change", validateZip, false);
	   
   } else if (zipInput.attachEvent) {
	   
	   zipInput.attachEvent("onchange", validateZip);
	   
   }
   
   var addressInput = document.getElementById("address");
   
   if (addressInput.addEventListener) {
	   
	   addressInput.addEventListener("change", validateAddress, false);
	   
   } else if (addressInput.attachEvent) {
	   
	   addressInput.attachEvent("onchange", validateAddress);
	   
   }

   
}
   

if (window.addEventListener) {
	
   window.addEventListener("load", createEventListeners, false);
   
} else if (window.attachEvent) {
	
   window.attachEvent("onload", createEventListeners);
   
}















































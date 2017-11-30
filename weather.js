/*
    Author: Elijah Trent
	
    Date:   11/29/2017

    Filename: script.js
*/

"use strict";

// global variables
var city = "Phoenix, AZ";

var weatherReport;

var httpRequest = false; // instantiates httpRequest and sets value to false

function getRequestObject() { 
	
	try { // uses XMLHttpRequest constructor withing a try statement to instantiate XMLHttpRequest assigns to httpRequest
		
		httpRequest = new XMLHttpRequest();
		
	}
	
	catch (requstError) { // displays message for users if error is thrown
		
		document.querySelector("p.error").innerHTML = "Forecast not supported by your browser.";
		
		document.querySelector("p.error").style.display = "block";
		
		return false;
		
	}
	
	return httpRequest;
	
}

function getWeather(evt) {
	
   var latitude;
   
   var longitude;
   
   if (evt.type !== "load") {
	   
      if (evt.target) {
		  
         selectedCity = evt.target.innerHTML;
		 
      } else if (evt.srcElement) {
		  
         selectedCity = evt.srcElement.innerHTML;
		 
      }
	  
   }
   
   if (city === "Phoenix, AZ") {
	   
      latitude = 37.7577;
	  
      longitude = -122.4376;
	  
   } 
   
   
   if (!httpRequest) { //checkes if the httpRequest variable already has a truthy value
	   
	   httpRequest = getRequestObject(); //calls the getRequestObject function to instantiate XMLHttpRequest
	   
   }
   
	httpRequest.abort(); // cancels HTTP request before beginning new one
	
	httpRequest.open("get","weather.php?" + "lat=" + latitude + "&lng=" + longitude, true); // opens new request
	
	httpRequest.send(null);
   
    httpRequest.onreadystatechange = fillWeather;
   
}

function fillWeather() {
	
	if (httpRequest.readyState === 4 && httpRequest.status === 200) { // proccesses request result for appropriate property values
		
		weatherReport = JSON.parse(httpRequest.responseText); 
		
		var rows = document.querySelectorAll("section.weatherToday table tbody tr"); 
		

		for (var i = 0; i < rows.length; i++) { // assigns cloud cover to table cells
			
			var firstCell = rows[i].getElementsByTagName("td")[1];
						
			var sun = Math.round((1 - weatherReport.daily.data[i].cloudCover) * 100,0);
			
			if (sun > 90) {firstCell.style.color = "rgb(255,171,0)";} // assigns colors to percentage based off of cloud cover
			
			else if (sun > 80 && sun <= 90) {firstCell.style.color = "rgb(255,179,25)";}
			
			else if (sun > 70 && sun <= 80) {firstCell.style.color = "rgb(255,188,51)";}
			
			else if (sun > 60 && sun <= 70) {firstCell.style.color = "rgb(255,196,77)";}
			
			else if (sun > 50 && sun <= 60) {firstCell.style.color = "rgb(255,205,102)";}
			
			else if (sun > 40 && sun <= 50) {firstCell.style.color = "rgb(255,213,128)";}
			
			else if (sun > 30 && sun <= 40) {firstCell.style.color = "rgb(255,223,153)";}
		
			else if (sun > 20 && sun <= 30) {firstCell.style.color = "rgb(255,230,179)";}
			
			else if (sun > 10 && sun <= 20) {firstCell.style.color = "rgb(255,238,204)";}
			
			else if (sun <= 10) {firstCell.style.color = "rgb(255,247,230)";}
			
			firstCell.innerHTML = sun + "%"; // gives percentages for sun
			
		}
			
		document.querySelector("section.weatherToday table").style.display = "inline-block";
		
		document.querySelector("section.weatherToday p.credit").style.display = "block";
		
	}
	
}

var condition = document.querySelectorAll("section");
	
   if (condition.addEventListener) {
	   
      condition.addEventListener("load", getWeather, false);
	  
   } else if (condition.attachEvent) {
	   
      condition.attachEvent("load", getWeather);
	  
   }
   

if (window.addEventListener) {
	
   window.addEventListener("load", getWeather, false);
   
} else if (window.attachEvent) {
	
   window.attachEvent("onload", getWeather);
   
}
   
   
  
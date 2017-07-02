(function(app){
	var textObj = {
	    COPYRIGHT: "No content displayed here shall be copied or used in any form without permissions from Wechitra Enterprises",
	    JUDICIARY: "Any judicial matter shall be subjected to Noida Judiciary",
	    COMPANY: "Wechitra Enterprises",
	    HOME_BANNER_TEXT1: "For a better tommorow,",
	    HOME_BANNER_TEXT2: "Take a step today",
	    NAVLINKS: [{name : "Home", state : "home" }, {name : "About us", state : "about" }, 
            { name: "Products", state: "products" }, { name: "Services", state: "services" }, { name: "Enquiry", state: "enquiry" }]

	}

	app.constant('texts', textObj);
})(angular.module('wechitra'))
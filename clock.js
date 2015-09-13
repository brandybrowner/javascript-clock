$(document).ready(function() {

	function displayTime() {
		var currentTime = new Date();
		var hours = currentTime.getHours();
		var minutes = currentTime.getMinutes();
		var seconds = currentTime.getSeconds();
		//getHours etc is a method used with date objects
		var meridiem ="AM";
		if(seconds < 10) {
			(seconds = "0" + seconds);
		}
		if(minutes < 10) {
			(minutes = "0" + minutes)
		}
		

var clockDiv = document.getElementById('clock');

clockDiv.innerText = (hours + ":" + minutes + ":" + seconds + "");

setInterval(displayTime,1000);
}

displayTime();

	
});
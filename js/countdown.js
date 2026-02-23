const date0 = new Date("Apr 1, 2028 00:00:00").getTime();
const date1 = new Date("Dec 13, 2029 00:00:00").getTime();
const date2 = new Date("Sep 24, 2071 00:00:00").getTime();
const date3 = new Date("Feb 25, 2075 00:00:00").getTime();
const date4 = new Date("Aug 6, 2077 00:00:00").getTime();
const date5 = new Date("Jun 11, 2088 00:00:00").getTime();

const countdownInterval = setInterval(function() {

	const now = new Date().getTime();

	const distance0 = date0 - now;
	const distance1 = date1 - now;
	const distance2 = date2 - now;
	const distance3 = date3 - now;
	const distance4 = date4 - now;
	const distance5 = date5 - now;

	document.getElementById("countdown0").innerHTML = distance0;
	document.getElementById("countdown1").innerHTML = distance1;
	document.getElementById("countdown2").innerHTML = distance2;
	document.getElementById("countdown3").innerHTML = distance3;
	document.getElementById("countdown4").innerHTML = distance4;
	document.getElementById("countdown5").innerHTML = distance5;
	
}, 0);

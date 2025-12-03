const targetDate = new Date("Apr 1, 2028 00:00:00").getTime();

const countdownInterval = setInterval(function() {

	const now = new Date().getTime();
	const distance = targetDate - now;

	document.getElementById("countdown").innerHTML = distance;

	if (distance < 0) {
		clearInterval(countdownInterval);
		document.getElementById("countdown").innerHTML = now;
	}
	
}, 0);

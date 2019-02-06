(function(){
	/* change these variables as you wish */
	const dueDate = new Date('2017-02-27');
	const daysDeadline = 60;
	/* stop changing here */
	
	const currentDate = new Date();
	const utc1 = Date.UTC(dueDate.getFullYear(), dueDate.getMonth(), dueDate.getDate());
	const utc2 = Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
	const days = Math.floor((utc2 - utc1) / (1000 * 60 * 60 * 24));
	
	if (days > 0) {
		const daysLate = daysDeadline - days;
		const opacity = (daysLate * 100 / daysDeadline) / 100;
			opacity = (opacity < 0) ? 0 : opacity;
			opacity = (opacity > 1) ? 1 : opacity;
		if (opacity >= 0 && opacity <= 1) {
			document.getElementsByTagName("BODY")[0].style.opacity = opacity;
		}
	}
	
})()

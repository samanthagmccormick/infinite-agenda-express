$(document).on('ready', function() {

	// Function to generate new days using moment.js 
	var totalDays = 0;  
	var anotherDay = function() {
		totalDays = totalDays + 1;
		var newDay = $('.defaultWeek').append('<div class = day>' + moment().subtract(totalDays, 'days').format('ddd, MM.DD') + '</div>');
		return newDay;
	};
  
	// This is the default week that appears on pageload
	$('.defaultWeek').append('<div class = day>' + moment().format('ddd, MM.DD') + '</div>'); // TODAY
	anotherDay();
	anotherDay();
	anotherDay();
	anotherDay();
	anotherDay();
	anotherDay();
	anotherDay();

	$(document).on("click", ".day", function() {
		$(this).after("<textarea class='form-control center' rows='3' placeholder= 'Add new appointment'></textarea>");
		$("textarea").focus();  // Auto-focus the textarea so that the user can type in an appt
	});

	// On blurring textarea
	$(document).on("blur", "textarea", function() {
		// Store the entered text as 'appointment'
		var appointment = $('textarea').val();
		// Hide the textarea
		$(this).hide();  
		// Replace the textarea with the newly entered 'appointment' (wrapping it in class 'item')
		$(this).replaceWith('<div class = item>' + appointment + '</div>');
	});

	// On click of an entered item
	$(document).on("click", ".item", function() {
		// Hide the text
		$(this).hide();
		// Replace the text with a new textarea
		$(this).replaceWith("<textarea class='form-control center' rows='3'></textarea>");
		// Put the thing you clicked's text into the textarea val()
		$("textarea").val( $(this).text() );  
		// Auto-focus the textarea so that they can edit the old text 
		$("textarea").focus();  
	});

	// Infinite scroll, which generates new days at the bottom
	$(window).on('scroll', function() {
  		if ($(window).scrollTop() == ($(document).height() - $(window).height())) {
	    	anotherDay();
    	 }
 	});

});
$(function(){
	// indicator
	var $current = $('#start');
	$current.addClass('active');

	// content
	var $current_step = $('#start-step');
	$current_step.addClass('active-step-content');

	// button next
	$('button#next').click(function() {
		if( $('#finish').hasClass('active') ){
			return false;
		}

		if( $('#finish-step').hasClass('active-step-content') ){
			return false;
		}

		// indicator
		$current = $current.next();
		$('div.indicator').removeClass('active');
		$current.addClass('active');

		// content
		$current_step = $current_step.next();
		$('div.steps').removeClass('active-step-content');
		$current_step.addClass('active-step-content');
	});

	// button prev
	$('button#prev').click(function() {
		if( $('#start').hasClass('active') ){
			return false;
		}
		if( $('#start-step').hasClass('active-step-content') ){
			return false;
		}

		// indicator
		$current = $current.prev();
		$('div.indicator').removeClass("active");
		$current.addClass("active");

		// content
		$current_step = $current_step.prev();
		$('div.steps').removeClass('active-step-content');
		$current_step.addClass('active-step-content');
	});
});
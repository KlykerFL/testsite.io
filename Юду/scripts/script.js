$(document).ready(function() {
	$('.header_burger').click(function(event) {
		$('.header_burger, .header_menu').toggleClass('active');
		$('body').toggleClass('lock')
	});

	$('.block__title').click(function(event) {
		if($('.block').hasClass('one')){
			$('.block__title').not($(this)).removeClass('open');
			$('.block__content').not($(this).next()).slideUp(300);
		}
		$(this).toggleClass('open').next().slideToggle(300);
	});
});
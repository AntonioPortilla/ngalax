$(function(){
	$('#Kslider').sabecarousel();

	/*animate.css*/
	var variable	= 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
		historia	= 'animated jello',
		roboRight	= 'animated tada',
		roboLeft	= 'animated bounceInLeft',
		TV			= 'animated zoomIn',
		kumbao		= 'animated bounce';

	$('.jumbotron h1').on('mouseover', function() {
		$(this).addClass(historia).one(variable, function(){
			$(this).removeClass(historia);
		});
	});

	$('.robotic img').eq(0).on('mouseover', function() {
		$(this).addClass(roboRight).one(variable, function(){
			$(this).removeClass(roboRight);
		});
	});

	$('.tv h4').on('mouseover', function() {
		$(this).addClass(TV).one(variable, function(){
			$(this).removeClass(TV);
		});
	});

	/*menu*/
	var overlay = '<div class="overlay"></div>';
	jQuery('#icono').toggle(
		// Primer click
		function(e){ 
			////jQuery(overlay).prependTo(jQuery('.bloque-slider-se'));
			jQuery('#icono').addClass('active');
			jQuery('#menu-k').css({'display': 'block', 'z-index': '1001'});
			jQuery('.overlay').slideDown();
			e.preventDefault();
			//$(this).text('Ocultar respuesta');
		}, // Separamos las dos funciones con una coma

		// Segundo click
		function(e){ 
			jQuery('.overlay').slideUp();
			jQuery('#icono').removeClass('active');
			jQuery('#menu-k').css({'display': 'none', 'z-index': '998'});
			//$(this).text('Ver respuesta');
			////jQuery('.bloque-slider-se').find('.overlay').remove();
			e.preventDefault();
		}

	);

});


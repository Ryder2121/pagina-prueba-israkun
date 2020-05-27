$(document).ready(function(){

//efecto paralax
	$(window).scroll(function(){
		var barra = $(window).scrollTop();
		var posicion = barra * 0.40;

		$("#banner").css({
			'background-position' : '0 -' + posicion + 'px'

		});
	});



});
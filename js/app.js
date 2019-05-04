$(document).ready(function(){

// Hamburger zmieniający się w krzyżyk w widoku mobilnym
	$('#nav-icon4').click(function(){
		$(this).toggleClass('open');
		$("#mainNavigation").toggleClass('open');
	});

// SliderSlick ustawienia
  $('#sliderSlick').slick({
    dots: true,
		speed: 1000,
		autoplay: true,
  	autoplaySpeed: 4000,
		prevArrow: $('#prev'),
    nextArrow: $('#next'),
  });



});

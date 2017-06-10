$(document).ready(function(){

	$(".hamburger").click( function() {
		
		$(".line2").fadeToggle();
		$(".line1").toggleClass("ukrstanje");
		$(".line3").toggleClass("ukrstanje-suprotno");

		$(".navigationBar").slideToggle();
	});
});
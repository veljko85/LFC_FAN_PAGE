$(document).ready(function(){
if (document.body.clientWidth <= 1024) {
	$(".hamburger").click( function() {
		
		$(".line2").fadeToggle();
		$(".line1").toggleClass("ukrstanje");
		$(".line3").toggleClass("ukrstanje-suprotno");

		$(".navigationBar").slideToggle();


	});

	$(".navigationBar a").click( function() {
		
		$(".newsSectionHome").hide();
		$(".section").show();

		$(".line2").fadeToggle();
		$(".line1").toggleClass("ukrstanje");
		$(".line3").toggleClass("ukrstanje-suprotno");
		$(".navigationBar").slideToggle();
	});
}	
	$(".navigationBar a").click( function() {		
		$(".section").load($(this).attr("href")).hide().fadeIn();
        	return(false);
	});

	$(".player").click( function() {
		$(".playerDetails").fadeToggle(); 
	});


});
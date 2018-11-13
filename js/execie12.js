$(document).ready(function() {
    interactions();
    variables();
 
    // run function on resize of the window
    $(window).resize(function() {
   
    });
 
    // run function on scroll
    $(window).scroll(function() {
 
    });
});
$( '.jqClick' ).click(function() {
  $( "#one:hidden:first" ).fadeIn( "slow" );
});

$('.jqClick2').click(function(){
	$( "#four:hidden:first" ).fadeIn( "slow" );
        $("#four").animate({left: '580px'});
    });
$('.jqClick3').click(function(){
	$( "#five:hidden:first" ).fadeIn( "slow" );
    $("#five").animate({
            left: '250px',
            opacity: '0.5',
            height: '100px',
            width: '150px'
    });
});
$('.jqClick4').click(function(){
        $("#ix").animate({
            height: 'toggle'
        });
    });
$('.jqClick5').click(function(){
	$( "#eve:hidden:first" ).fadeIn( "slow" );
        var div = $("#eve");  
        div.animate({left: '500px'}, "slow");
        div.animate({fontSize: '50px'}, "slow");
    });
//in order for any jQuery to work you need to add the code to call the jQuery library and add the tag to call your js file. Reference the bottom two tags before the close of the body on the Day 6 notes file.

$(document).ready(function() {
    // run function on initial page load
    // call your function by writing yourFunctionName(); below

Randomdotplace();
    
});

//change your function name to something that makes sense. Use that name to call it above.

function Randomdotplace() {
	$('.dot').click(function() {
  var bodyWidth = document.body.clientWidth;
  var bodyHeight = $( document ).height();
  var randPosX = Math.floor((Math.random()*bodyWidth));
  var randPosY = Math.floor((Math.random()*bodyHeight));
	console.log(bodyHeight);
	 console.log(randPosY);
  
  $('.dot').css('left', randPosX);
  $('.dot').css('top', randPosY);
  
  
});

}
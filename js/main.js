

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");


//Add caption to overlay
$overlay.append($caption);

//Add image to overlay
$overlay.append($image);


//Add overlay
$("body").append($overlay);

//Capture the click event on a link to an image
$("#gallery a").click(function(event) {
	event.preventDefault();
	var imageLocation = $(this).attr("href");
	$image.attr("src", imageLocation);

	//Show the overlay
	$overlay.show();


	//Get child's alt attribute and set caption
	var captionText = $(this).children("img").attr("alt");
	$caption.text(captionText);
});

//Hide overlay when clicked
$overlay.click(function(){
	$overlay.hide();
})


//Trying to fix the scroll on the overlay, it's not covering the whole page
$("body").on("scroll", function() {
  var scrollTop = $(this).scrollTop();
  $("#overlay").css("top", scrollTop);
  $("#overlay").css("bottom", -scrollTop);
});

//Copywrite year
$(document).ready(function(){
	document.getElementById("copywrite").innerHTML = "&copy; " + new Date().getFullYear() + " Natalie Hall";
});

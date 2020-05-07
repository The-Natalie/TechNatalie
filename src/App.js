import React from "react";
import Header from "./Header"
import Portfolio from "./Portfolio"
import Skills from "./Skills"
import About from "./About"
import Contact from "./Contact"
import Footer from "./Footer"
import $ from "jquery";

class App extends React.Component {
	
 componentDidMount() {
    let $overlay = $('<div id="overlay"></div>');
		let $image = $("<img>");
		let $caption = $("<p></p>");


		//Add caption to overlay
		$overlay.append($caption);

		//Add image to overlay
		$overlay.append($image);


		//Add overlay
		$("body").append($overlay);

		//Capture the click event on a link to an image
		$("#gallery a").click(function(event) {
			event.preventDefault();
			let imageLocation = $(this).attr("href");
			$image.attr("src", imageLocation);

			//Show the overlay
			$overlay.show();


			// //Get child's alt attribute and set caption
			let captionText = $(this).children("img").attr("alt");
			$caption.text(captionText);
		});

		//Hide overlay when clicked
		$overlay.click(function(){
			$overlay.hide();
		})


		//Trying to fix the scroll on the overlay, it's not covering the whole page
		$("body").on("scroll", function() {
		  let scrollTop = $(this).scrollTop();
		  $("#overlay").css("top", scrollTop);
		  $("#overlay").css("bottom", -scrollTop);
		});

		$(".most-button").click(function() {
			$(".most-skill").css({"opacity": 1});
			$(".less-skill").css({"opacity": 0.2});
			$(".none-skill").css({"opacity": 0.2});
			$(".other-skill").css({"opacity": 0.2});
		});

		$(".less-button").click(function() {
			$(".most-skill").css({"opacity": 0.2});
			$(".less-skill").css({"opacity": 1});
			$(".none-skill").css({"opacity": 0.2});
			$(".other-skill").css({"opacity": 0.2});
		});

		$(".none-button").click(function() {
			$(".most-skill").css({"opacity": 0.2});
			$(".less-skill").css({"opacity": 0.2});
			$(".none-skill").css({"opacity": 1});
			$(".other-skill").css({"opacity": 0.2});
		});

		$(".other-button").click(function() {
			$(".most-skill").css({"opacity": 0.2});
			$(".less-skill").css({"opacity": 0.2});
			$(".none-skill").css({"opacity": 0.2});
			$(".other-skill").css({"opacity": 1});
		});

		$(".all-button").click(function() {
			$(".most-skill").css({"opacity": 1});
			$(".less-skill").css({"opacity": 1});
			$(".none-skill").css({"opacity": 0.7});
			$(".other-skill").css({"opacity": 0.6});
		});
  }

  render () {
		return (
			<div>
	  		<div id="header">
					<Header />
				</div>
				<div className="gradient"></div>
				<section className="wave-container">
			  	<div className="wave"></div>
				</section>
				<Portfolio />	
				<div id="subpage">
					<Skills />
					<About />
					<Contact />
					<Footer />
				</div>
			</div>
		)
	}
}

export default App;
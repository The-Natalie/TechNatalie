import React from "react";
import Header from "./Header"
import Portfolio from "./Portfolio"
import About from "./About"
import Contact from "./Contact"
import Footer from "./Footer"

function App() {
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
					<About />
					<Contact />
					<Footer />
				</div>
		</div>
	)
}

export default App;
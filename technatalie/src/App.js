import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';
import Header from "./Header"
import Portfolio from "./Portfolio"
import About from "./About"
import Contact from "./Contact"
import Footer from "./Footer"

function App() {
	return (
		<div>
			{// <ScrollAnimation animateOut='fadeOut' initiallyVisible={true}>
}	  		<div id="header">
					<Header />
				</div>
			{// </ScrollAnimation>
}			
			{// <ScrollAnimation animateIn="bounce" animateOut='fadeOut'>
}				<div id="subpage">
					<Portfolio />
					<About />
					<Contact />
					<Footer />
				</div>
			{// </ScrollAnimation>
}		</div>
	)
}

export default App;
import React from "react";

function Header() {
	return (
		<div className="wrap">
			<header className="main-header">
	      <a href="index.html" id="logo">
	    	 <img src="images/TechNatalie_logo2a.gif" alt="TechNatalie logo" />
	       <h2 className="tagline">Natalie is a Web Developer for hire</h2>
	      </a>
	        <nav>
	          <ul class="main-nav">
	            <li><a href="#portfolio-sec">Portfolio</a></li>
	            <li><a href="#about-sec">About</a></li>
	            <li><a href="#contact-sec">Contact</a></li>
	          </ul>
	        </nav>
	    </header>
	    <section>
	      <div className="natalie-photo">
	        <img src="images/IMG_1028.jpg" alt="Picture of Natalie" />
	      </div>
	    </section>
    </div>
	)
}

export default Header;
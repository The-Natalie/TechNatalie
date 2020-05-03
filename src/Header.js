import React from "react";

function Header() {
	return (
		<div className="wrap">
			<header className="main-header">
	      <div id="logo">
	    	 <h1 className="logo-text"><span className="logo-char">{'<'}</span><span className="logo-name">techNatalie </span><span className="logo-char">{'/>'}</span></h1>
	       <h2 className="tagline">Natalie is a Web Developer for hire</h2>
	      </div>
	        <nav>
	          <ul className="main-nav">
	            <li><a href="#portfolio-sec">Portfolio</a></li>
	            <li><a href="#about-sec">About</a></li>
	            <li><a href="#contact-sec">Contact</a></li>
	          </ul>
	        </nav>
	    </header>
	    <section>
	      <div className="natalie-photo">
	        <img src="images/IMG_1028.jpg" alt="Natalie" />
	      </div>
	    </section>
    </div>
	)
}

export default Header;
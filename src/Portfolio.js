import React, { useState, useRef } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import portfolioData from "./portfolioData";
import Accordion from "./components/Accordion";



function Portfolio() {

const portfolioComponents = portfolioData.map(data => <Accordion key={data.id} compTitle={data.compTitle} rollInfo={data.rollInfo} />)

  return (
    <section id="portfolio-sec">
        <ScrollAnimation animateIn='swing' initiallyVisible={true}>
          <h1><span className="first-letter">P</span>ortfolio</h1>
        </ScrollAnimation>
        {portfolioComponents}
    </section>
  )
}

export default Portfolio;
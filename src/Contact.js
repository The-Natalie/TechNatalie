import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';

function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <ScrollAnimation animateIn='rubberBand' initiallyVisible={true}>
          <h1><span className="first-letter">C</span><span style={{textDecoration:"underline"}}>ontact</span></h1>
        </ScrollAnimation>
        <div className="contact">
          <h3>Email: <a href="mailto:natalie@technatalie.com">natalie@technatalie.com</a></h3>
          <h3><a href="https://linkedin.com/in/nataliedhall" target="_blank" rel="noopener noreferrer">LinkedIn</a></h3>
          <h3><a href="https://github.com/The-Natalie" target="_blank" rel="noopener noreferrer">Github</a></h3>
          <br />
          <p>Natalie is currently located in Stuarts Draft, <b>Virginia</b> and is looking for a job that is either <b>remote</b> or within <b>Charlottesville</b>, <b>Lexington</b>, <b>Harrisonburg</b>, and the areas in between.</p>
          <br />
          <p>**Resume available upon request**</p>
        </div>
      </div>
    </section>   
  )
}

export default Contact;
import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';

function Contact() {
  return (
    <section id="contact-sec">
      <div className="container">
        <ScrollAnimation animateIn='rubberBand' initiallyVisible={true}>
            <h1><span className="first-letter">C</span>ontact</h1>
          </ScrollAnimation>
        <div className="contact">
          
          <h2>Email: <a href="mailto:natalie@technatalie.com">natalie@technatalie.com</a></h2>
          <h2><a href="https://linkedin.com/in/nataliedhall" target="_blank">LinkedIn</a></h2>
          <h2><a href="https://github.com/The-Natalie" target="_blank">Github</a></h2>
          <h2>Testing</h2>
          <br />
          <p>Natalie is currently located in Stuarts Draft, VA and is looking for a remote job.</p>
          <br />
          <br />
          <p>**Resume available upon request**</p>

        </div>
      </div>
    </section>   
  )
}

export default Contact;
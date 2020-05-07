import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';

function About() {
  return (
    <section id="about">
      <div className="container">
        <ScrollAnimation animateIn='rotateIn' initiallyVisible={true}>
          <h1><span className="first-letter">A</span><span style={{textDecoration:"underline"}}>bout</span></h1>
        </ScrollAnimation>
        <p><img src="images/Natalie2016.jpg" alt="Natalie" />I started my career with a passion in video production. While offering freelance video services, I created a website for myself in order to market and showcase my services. I was self-taught and started helping other businesses create, design and develop their websites, eventually teaching them how to maintain it themselves. I eventually landed a job with an Architectural/Engineering firm doing their marketing, and maintaining and redesigning their websites(they had three companies under one roof). Unfortunately, I wasn’t able to expand on my career in this position because it was such a small company and they didn’t have room for advancement. Fortunately, the company was very flexible and let me work from home, which allowed me to take classes. Since I already really enjoyed working on websites and had years of experience with HTML, CSS and followed design trends, I decided to take my skills to the next level and chose to become a Front-End Web Developer. I took the Front-End Web Development career track at <a href="https://teamtreehouse.com" target="_blank" rel="noopener noreferrer">Treehouse</a>, which teaches all the skills required to start a career in Front-End Web Development. This led to me landing a job at the small Charlottesville company, BitLathe, where I was a Web Developer. My boss, Cushing Whitney (whom I consider a genius), mentored and taught me for the next two years. Eventually, the company lost its main client and decided to dissolve, resulting in me having to look for another job, which is what I'm doing now. I hope to work and learn my way into becoming a Software Developer.</p>
      </div>
    </section>
  )
}

export default About;
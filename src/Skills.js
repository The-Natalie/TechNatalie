import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import randomColor from 'randomcolor';
import TagCloud from 'react-tag-cloud';

class Skills extends Component {
  componentDidMount() {
    setInterval(() => {
      this.forceUpdate();
    }, 30000);
  }

  render() {
    return (
      <section id="skills">
      <div className="container">
        <ScrollAnimation animateIn='rubberBand' initiallyVisible={true}>
          <h1><span className="first-letter">S</span><span style={{textDecoration:"underline"}}>kills</span></h1>
        </ScrollAnimation>
        <p className="skill-button-title">(Languages, Frameworks, Libraries, etc.)</p>
        <div className="skill-button">
          <button className="most-button">Most experience</button> 
          <button className="less-button">Less experience</button> 
          <button className="none-button">Learned, but no project experience</button> <br />
        </div>
        <div className="other-skills-button">
          <button className="other-button">Other Skills</button> 
          <button className="all-button">All Skills</button>
        </div>
        <div className='app-outer'>
          <div className='app-inner'>
            <TagCloud className='tag-cloud' style={{color: () => randomColor({luminosity: 'dark'}), padding: 2, whiteSpace: 'wrap',}}>
              <div className="most-skill" style={{fontFamily: 'serif', fontSize: 45, fontStyle: 'italic', fontWeight: 'bold'}}>JavaScript</div>
              <div className="most-skill" style={{fontSize: 50, fontWeight: 'bold'}}>HTML</div>
              <div className="most-skill" style={{fontSize: 40, fontWeight: 'bold'}}>CSS</div>
              <div className="most-skill" style={{fontSize: 40, fontWeight: 'bold'}}>jQuery</div>
              <div className="most-skill" style={{fontSize: 32.5, fontWeight: 'bold'}}>Bootstrap</div>
              <div className="most-skill" style={{fontSize: 40, fontWeight: 'bold'}}>MySQL</div>
              <div className="most-skill" style={{fontSize: 32.5, fontWeight: 'bold'}}>Bash</div>
              <div className="most-skill" style={{fontSize: 40, fontWeight: 'bold'}}>Git</div>
              <div className="most-skill" style={{fontSize: 30, fontWeight: 'bold'}}>JSON</div>

              <div className="less-skill" style={{fontSize: 20}}>SCSS</div>
              <div className="less-skill" style={{fontSize: 25}}>PHP</div>
              <div className="less-skill" style={{fontSize: 30}}>React</div> 
              <div className="less-skill" style={{fontSize: 20}}>Node</div>
              <div className="less-skill" style={{fontSize: 20}}>AJAX</div>
              <div className="less-skill" style={{fontSize: 30}}>WordPress</div>
              <div className="less-skill" style={{fontSize: 20}}>Grunt</div>
              <div className="less-skill" style={{fontSize: 40}}>JSX</div>
              <div className="less-skill" style={{fontSize: 30}}>XML</div>
              <div className="less-skill" style={{fontSize: 25}}>SQL</div>

              <div className="none-skill" style={{fontSize: 18, opacity: 0.7}}>Vue</div>
              <div className="none-skill" style={{fontSize: 18, opacity: 0.7}}>Ruby</div>
              <div className="none-skill" style={{fontSize: 20, opacity: 0.7}}>Python</div>
              <div className="none-skill" style={{fontSize: 24.5, opacity: 0.7}}>Java</div>
              <div className="none-skill" style={{fontSize: 22, opacity: 0.7}}>C#</div>
              <div className="none-skill" style={{fontSize: 18, opacity: 0.7}}>Angular</div>
              <div className="none-skill" style={{fontSize: 18, opacity: 0.7}}>AWS</div>

              <div className="other-skill" style={{fontSize: 35, opacity: 0.6}}>GitHub</div>
              <div className="other-skill" style={{fontSize: 40, opacity: 0.6}}>Photoshop</div>
              <div className="other-skill" style={{fontSize: 30, opacity: 0.6}}>UnitTesting</div>
              <div className="other-skill" style={{fontSize: 30, opacity: 0.6}}>ProjectMgmt</div>
              <div className="other-skill" style={{fontSize: 40, opacity: 0.6}}>BrowserTesting</div>
              <div className="other-skill" style={{fontSize: 40, opacity: 0.6}}>DeviceTesting</div>
              <div className="other-skill" style={{fontSize: 40, opacity: 0.6}}>ClientConsulting</div>
              <div className="other-skill" style={{fontSize: 45, opacity: 0.6}}>Communication</div>
              <div className="other-skill" style={{fontSize: 40, opacity: 0.6}}>RespDesign</div>
              <div className="other-skill" style={{fontSize: 50, opacity: 0.6}}>SelfTaught</div>
              <div className="other-skill" style={{fontSize: 50, opacity: 0.6}}>Learning</div>
              <div className="other-skill" style={{fontSize: 35, opacity: 0.6}}>UIDesign</div>
              <div className="other-skill" style={{fontSize: 45, opacity: 0.6}}>ProblemSolving</div>
              <div className="other-skill" style={{fontSize: 35, opacity: 0.6}}>Linux</div>
              <div className="other-skill" style={{fontSize: 30, opacity: 0.6}}>Mac</div>
              <div className="other-skill" style={{fontSize: 30, opacity: 0.6}}>WindowsPC</div>
              <div className="other-skill" style={{fontSize: 40, opacity: 0.6}}>Documentation</div>
              <div className="other-skill" style={{fontSize: 50, opacity: 0.6}}>AttnToDetail</div>
              <div className="other-skill" style={{fontSize: 35, opacity: 0.6}}>SEO</div>
            </TagCloud>
          </div>
        </div>
      </div>
    </section>    
    );
  }
}

export default Skills;
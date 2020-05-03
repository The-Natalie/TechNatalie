import React, { useState, useRef } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Chevron from "./Chevron";

function Accordion(props) {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("accordion__icon");

  const content = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
    setRotateState(
      setActive === "active" ? "accordion__icon" : "accordion__icon rotate"
    );
  }

  return (
    <ScrollAnimation animateIn='slideInUp' animateOnce={true}>
        <div className="accordion__section">
          <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
          <Chevron className={`${setRotate}`} width={20} fill={"#9370db"} />
            <div className="accordion__title" dangerouslySetInnerHTML={{ __html: props.compTitle}}></div>
            
          </button>
          <div
            ref={content}
            style={{ maxHeight: `${setHeight}` }}
            className="accordion__content"
          >
            <div
              className="accordion__text"
              dangerouslySetInnerHTML={{ __html: props.rollInfo }}
            />
          </div>
        </div>
    </ScrollAnimation>
  );

}

export default Accordion
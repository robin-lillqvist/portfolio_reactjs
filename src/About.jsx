import React from "react";

const About = () => {
  return (
    <div id="about_page" className="ui main container">
      <div className="ui stackable two column grid">
        <div className="column">
        <img className="svg_image" src="./src/images/drawkit-content-man-colour.svg"></img>
        </div>
        <div id="aboutme_text" className="column">
          <h1 className="ui header" id="about-header">About Me</h1>
          <div className="about_div">
            <div className="about_headline">Background</div>
            <div className="about_bread">Robin grew up in the south suburbs of Stockholm. At a young age he picked up an interest of computers. And with the arrival of what we today call the internet - that interest grew into an obsession.</div>
          </div>
          <div className="about_div">
            <div className="about_headline">You worked as a QA, why did I want to become a developer?</div>
            <div className="about_bread">Reasoning here</div>
          </div>
          <div className="about_div">
            <div className="about_headline">Other interests</div>
            <div className="about_bread">            
            - Building Computers
            - Podcast producer
            - Hobby music producer</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
import React from "react";

const About = () => {
  return (
    <div id="about_page" className="ui main container">
        <h1 className="ui header" id="about-header">About Me</h1>
        <img className="svg_image" src="./src/images/drawkit-content-man-colour.svg"></img>  
        <div class="ui grid">
          <div class="centered twelve wide column">
            <div className="about_headline">Background</div>
            <div className="about_bread">Robin grew up in the south suburbs of Stockholm. At a young age he picked up an interest of computers. And with the arrival of what we today call the internet - that interest grew into an obsession.</div>
          </div>  
          <div class="centered twelve wide column">
            <div className="about_headline">You worked as a QA, why did I want to become a developer?</div>
            <div className="about_bread">Reasoning here</div>
          </div> 
          <div class="centered twelve wide column">
          <div className="about_headline">Other interests</div>
            <div className="about_bread">            
            - Building Computers
            - Podcast producer
            - Hobby music producer</div>
          </div>   
        </div>
      </div>
  );
};

export default About;
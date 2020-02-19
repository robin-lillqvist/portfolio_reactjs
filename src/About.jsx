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
          <p>
            Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident
            corporis fuga saepe distinctio ipsam? Et quos harum excepturi dolorum
            molestias?
          </p>
          <p>
            Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident
            corporis fuga saepe distinctio ipsam? Et quos harum excepturi dolorum
            molestias?
          </p>
          <p>
            Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident
            corporis fuga saepe distinctio ipsam? Et quos harum excepturi dolorum
            molestias?
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
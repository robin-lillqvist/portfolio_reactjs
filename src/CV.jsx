import React from "react";
import { UndrawDesignerLife, UndrawAstronaut, UndrawBeTheHero, UndrawWorkTime } from "react-undraw-illustrations";
import UndrawFeelingBlue from "react-undraw-illustrations/lib/components/UndrawFeelingBlue/UndrawFeelingBlue";
import UndrawWelcome from "react-undraw-illustrations/lib/components/UndrawWelcome/UndrawWelcome";

const About = () => {
  return (
    <div className="ui main container">
        <UndrawWorkTime primaryColor='#12283a' height='200px' />
          <h1 className="ui header" id="about-header">Curriculum Vitae</h1>
          <p>
            Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident
            corporis fuga saepe distinctio ipsam? Et quos harum excepturi dolorum
            molestias?
          </p>
    </div>
  );
};

export default About;
import React from "react";

const SkillCard = ({ skill }) => {
  return (
    <>        
      <div className="column five wide right aligned ">{skill.name}</div>
      <div className="column six wide left aligned">
        <div className="ui progress" data-percent="52">
          <div className="bar" style={{transitionDuration: "300ms", width: skill.progress}}>
            <div class="progress">{skill.progress}</div>
          </div>
      </div>
      </div>
    </>
  );
};

export default SkillCard;
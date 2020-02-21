import React from "react";

const SkillCard = ({ skill }) => {
  return (
    <>        
    <div class="column">{skill.name}</div>
    <div class="column">{skill.stars}</div>
    </>
  );
};

export default SkillCard;
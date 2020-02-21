import React from "react";

const SkillCard = ({ skill }) => {
  return (
    <>        
    {skill.name}
    {skill.stars}
    </>
  );
};

export default SkillCard;
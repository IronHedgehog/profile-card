import React from "react";

const Skill = ({ skill, level, background }) => {
  return (
    <div className="skill" style={{ backgroundColor: background }}>
      {skill} {level}
    </div>
  );
};

export default Skill;

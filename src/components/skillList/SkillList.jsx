const SkillList = ({ skill, level, background }) => {
  return (
    <div className="skill-list">
      <div className="skill" style={{ backgroundColor: { background } }}>
        {skill} {level}
      </div>
    </div>
  );
};

export default SkillList;

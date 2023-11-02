import Skill from "./skill/Skill";

const SkillList = () => {
  return (
    <div className="skill-list">
      <Skill skill={"HTML+CSS"} level={"💪"} background={"orangered"} />
      <Skill skill={"JavaScript"} level={"💪"} background={"yellow"} />
      <Skill skill={"Git and GitHub"} level={"💪"} background={"red"} />
      <Skill skill={"React"} level={"👍"} background={"blue"} />
    </div>
  );
};

export default SkillList;

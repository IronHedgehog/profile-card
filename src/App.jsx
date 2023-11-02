import "./App.css";
import Avatar from "./components/avatar/Avatar";
import Intro from "./components/intro/Intro";
import SkillList from "./components/skillList/SkillList";

function App() {
  const introText =
    "Full-stack web developer and teacher at GoIteens. When not coding or preparing a course, I like to play board games, to cook (and eat).";
  return (
    <div className="card">
      <Avatar photo={"avatar.webp"} name={"Artem"} />
      <div className="data">
        <Intro introText={introText} />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList skill={"HTML+CSS"} level={"💪"} background={"blue"} />
        <SkillList skill={"JavaScript"} level={"💪"} background={"yellow"} />
        <SkillList skill={"Git and GitHub"} level={"💪"} background={"red"} />
        <SkillList skill={"React"} level={"👍"} background={"blue"} />
      </div>
    </div>
  );
}

export default App;

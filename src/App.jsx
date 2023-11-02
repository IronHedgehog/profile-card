import "./App.css";
import Avatar from "./components/avatar/Avatar";
import Intro from "./components/intro/Intro";
import SkillList from "./components/skillList/SkillList";

function App() {
  const name = "Artem Faust";
  const introText =
    "Full-stack web developer and teacher at GoIteens. When not coding or preparing a course, I like to play board games, to cook (and eat).";
  return (
    <div className="card">
      <Avatar photo={"avatar.webp"} name={name} />
      <div className="data">
        <Intro introText={introText} name={name} />
        <SkillList />
      </div>
    </div>
  );
}

export default App;

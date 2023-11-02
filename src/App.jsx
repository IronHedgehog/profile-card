import "./App.css";
import Avatar from "./components/avatar/Avatar";
import Intro from "./components/intro/Intro";
import SkillList from "./components/skillList/SkillList";

function App() {
  return (
    <div className="card">
      <Avatar photo={"avatar.webp"} name={"Artem"} />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

export default App;

import CSSLogo from "../assets/img/skills/css.svg";
import JsLogo from "../assets/img/skills/javascript.svg";
import TsLogo from "../assets/img/skills/typescript.svg";
import ReactLogo from "../assets/img/skills/react.svg";
import FigmaLogo from "../assets/img/skills/figma.svg";
import MongoDBLogo from "../assets/img/skills/mongodb.svg";
import SupabaseLogo from "../assets/img/skills/supabase.svg";

import "../styles/Skills.css";

function Skills() {
  const skills = [
    { icon: CSSLogo, name: "CSS", color: "teal" },
    { icon: JsLogo, name: "JavaScript", color: "yellow" },
    { icon: TsLogo, name: "TypeScript", color: "blue" },
    { icon: ReactLogo, name: "React", color: "lightblue" },
    { icon: FigmaLogo, name: "Figma", color: "purple" },
    { icon: MongoDBLogo, name: "MongoDB", color: "green" },
    { icon: SupabaseLogo, name: "Supabase", color: "lightgreen" },
  ];

  return (
    <div className="skills">
      {skills.map((skill) => (
        <div className="skill" style={{ color: `${skill.color}` }}>
          <div style={{ width: "30px" }} className="skill-logo">
            <img width="100%" src={skill.icon} alt={`${skill.name} logo`} />
          </div>
          {skill.name}
        </div>
      ))}
    </div>
  );
}

export default Skills;

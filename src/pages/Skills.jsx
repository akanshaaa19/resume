import SkillItem from "../components/SkillItem";
import skills from "../assets/skills";
import "../components/styles/skills.css";

function Skill() {
  return (
    <section id="skills">
      <h2 className="sec-heading">/skills</h2>

      <div className="skills">
        <p>
          I mostly work with ReactJS and NodeJS to create web apps. I have worked with 
          <em><b> React Context API</b></em>, <em><b>Redux</b></em>, <em><b>JWT</b></em>, <em><b>Multer</b></em> etc. I have also worked with Figma for UI design.
          <br />
          Here are some technologies I have been working with:
        </p>
        <div className="row skill-div">
          {skills.map((skill) => {
            return <SkillItem class={skill.class} name={skill.name} />;
          })}{" "}
        </div>
      </div>
    </section>
  );
}

export default Skill;

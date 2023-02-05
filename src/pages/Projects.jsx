import Card from "../components/UI/Card";
import projects from "../assets/projects";

import "../components/styles/projects.css";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <section id="projects">
      <h2 className="sec-heading">/projects</h2>

      <div className="projects row  ">
        {projects.map((project) => {
          return (
            <Card
              src={project.src}
              github={project.github}
              live={project.active}
              title={project.title}
              desc={project.description}
              stack={project.stack}
            />
          );
        })}
      </div>

      <div className="github-link">
      <a target={"_blank"}  href="https://github.com/akanshaaa19">
        more projects <i class="fa-solid fa-arrow-up-right-from-square"></i>
      </a></div>
    </section>
  );
}

export default Projects;

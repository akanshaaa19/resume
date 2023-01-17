import Card from "../components/UI/Card";
import projects from "../assets/projects";

import "../components/styles/projects.css";

function Projects() {
  return (
    <section id="projects">
      <h2 className="sec-heading">/projects</h2>

      <div className="projects row card-group">
        {projects.map((project) => {
          return (
            <Card
              src={project.src}
              github={project.github}
              live={project.live}
              title={project.active}
              desc={project.description}
              stack={project.stack}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Projects;

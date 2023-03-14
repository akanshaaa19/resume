import Card from "../components/UI/Card";
import projects from "../assets/projects";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProjectModal from "../components/UI/ProjectModal";

import "../components/styles/projects.css";
import { Link } from "react-router-dom";
import { uiActions } from "../store";

function Projects() {
  const dispatch = useDispatch();
  const showModal = useSelector((state) => state.ui.showModal);
  return (
    <>
      {showModal && <ProjectModal />}

      <section id="projects">
        <h2 className="sec-heading">/projects</h2>

        <div className="projects row  ">
          {projects.map((project) => {
            return (
              <Card
              // onClick={() => {
                // dispatch(uiActions.modalConfig({showModal: true, projectId: project.projectId}));
              // }}
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
          <a target={"_blank"} href="https://github.com/akanshaaa19">
            more projects <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </div>
      </section>
    </>
  );
}

export default Projects;

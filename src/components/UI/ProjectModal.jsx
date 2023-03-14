import { Fragment, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import projects from "../../assets/projects";

import "../styles/projectmodal.css";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store";

function ProjectOverlay(props) {
  const id = useSelector((state) => state.ui.projectId);
  const project = projects.filter((project) => project.projectId === id);
  console.log(project);
  return (
    <div className="project-overlay">
      <h1>{project[0].title}</h1>
      <div className="another-box">
      <div className="carousel-box">
      <div id="carouselExampleIndicators" class="carousel slide">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
              <img
                src="https://i.ibb.co/zffLdpr/img1.png"
                alt="img1"
                border="0"
              />
          </div>
          <div class="carousel-item">
              <img
                src="https://i.ibb.co/YtDSTZx/img2.png"
                alt="img2"
                border="0"
              />
          </div>
          <div class="carousel-item">
          <img src="https://i.ibb.co/dkFrTdM/img3.png" alt="img3" border="0" />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    </div>
    </div>
  );
}

function Backdrop(props) {
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => {
        dispatch(uiActions.modalConfig({ showModal: false }));
      }}
      className="backdrop"
    >
      {props.children}
    </div>
  );
}

function ProjectModal() {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("overlay-hook")
      )}
      {ReactDOM.createPortal(
        <ProjectOverlay />,
        document.getElementById("overlay-hook")
      )}
    </Fragment>
  );
}

export default ProjectModal;

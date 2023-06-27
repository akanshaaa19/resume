import resume from "../assets/akanshaResume.pdf"
import updatedResume from "../assets/resume_akansha.pdf"
import image from "../assets/me.jpg";

import "../components/styles/about.css";

import Button from "../components/UI/Button";

function About() {
  return (
    <section id="about">
      <h2 className="sec-heading">/about</h2>
      <div className="about">
        <div className="row about-div">
          <div className="col-6 about-text">
            <p className="">
              I'm a third-year computer science student with a keen interest in
              front-end development. I enjoy learning new things and taking on
              new challenges. Along with all of this, I enjoy participating in
              hackathons, networking with new people, and sharing ideas.
            </p>
            <Button class="outlined">
              <a href={updatedResume} download="akanshaResume">
                Resume <i className="fas fa-download"></i>
              </a>
            </Button>
          </div>

          <div className="col-6 about-image">
            <img className="self-picture" src={image} alt="its me" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

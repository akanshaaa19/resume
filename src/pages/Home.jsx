import Button from "../components/UI/Button";

import "../components/styles/home.css";

function Home() {
  return (
    <section id="home">
      <div className="home">
        <h1 className="home-heading">
          <span className="hi">hi,</span> <span className="name">akansha</span>{" "}
          here.
        </h1>
        <p className="home-p ">
          i am currently a third-year computer science student, my areas of
          interest include{" "}
          <b>
            <em>front-end development</em>
          </b>
          ,{" "}
          <b>
            <em>design</em>
          </b>
          , and{" "}
          <b>
            <em>machine learning</em>
          </b>
          .
        </p>

        <Button class="outlined">
          <a
            href="mailto: akanshasakhre@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-solid fa-envelope fa-lg"></i> <span>Say Hi!</span>
          </a>
        </Button>
      </div>
    </section>
  );
}
export default Home;

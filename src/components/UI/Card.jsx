import "../../components/styles/card.css";
function Card(props) {
  return (
    <div className="card-div  row card">
      <div className="card-img">
        <img src={props.src} />
      </div>

      <div className="desc">
        <h3 className="card-title">{props.title}</h3>
        <p className="card-text">{props.desc}</p>
        <div className=" card-footer">
          <div className="stack">{props.stack}</div>
          <div className="links">
            <a href={props.github} target={"_blank"}>
              <i className="fa-brands fa-github fa-lg"></i>
            </a>
            <a href={props.live} target={"_blank"}>
              <i className="fa-solid fa-square-arrow-up-right fa-lg"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

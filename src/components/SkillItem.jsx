import '../components/styles/skillitem.css'

function SkillItem(props) {
  return (
    <div className="skill col-lg-4 col-sm-6 skill col-6">
      <i className="fa-solid fa-play bullet"></i>
      <i className={`${props.class} stack-logo`}></i>
      <span className="skill-name">{props.name}</span>
    </div>
  );
}

export default SkillItem;

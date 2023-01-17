import '../styles/navigation.css'
import Socials from "../Socials";

function Navigation (props){

    function switchMode(){
        props.switchMode();
    }
   return <nav>
    <ul className="nav">
        <a activeClassName="active" href="#home">/home</a>
        <a activeClassName="active" href="#about">/about</a>
        <a activeClassName="active" href="#skills">/skill</a>
        <a activeClassName="active" href="#projects">/projects</a>
    </ul>
    <Socials switchMode={switchMode} />
   </nav>;
}
 
export default Navigation
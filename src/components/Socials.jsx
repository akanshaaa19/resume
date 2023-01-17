import { useState } from 'react';
import './styles/socials.css'

function Socials (props){

   function switchMode(){
      setDark(!dark)
      props.switchMode();
   }

   const [dark, setDark] = useState(true)
   return <ul className="socials">
    <a href='https://github.com/akanshaaa19' target="_blank"><li><i className="fa-brands fa-github fa-lg"></i></li></a>
    <a href='https://www.aedin.com/in/akansha-sakhre-21428b1ba/' target="_blank"><li><i className="fa-brands fa-linkedin fa-lg"></i></li></a>
    <a href='mailto: akanshasakhre@gmail.com' target="_blank"><li><i className="fa-solid fa-envelope fa-lg"></i></li></a>
      {/* <button onClick={switchMode} className='light-mode'>{!dark ? <i class="fa-solid fa-sun fa-2x"></i> :<i class="fa-solid fa-moon fa-2x"></i>}</button> */}
   </ul>;
}
 
export default Socials
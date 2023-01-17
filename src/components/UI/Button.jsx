import '../styles/button.css'

function Button (props){
   return <button className={`${props.class} btn`}>
    {props.children}
   </button>;
}
 
export default Button
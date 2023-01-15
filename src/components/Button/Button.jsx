import "./button.css";

const Button = ({text, type} ) => { 
    return <botton type ={ type} className="btn">{text} </botton>
}
export default Button;

Button.defaultProps = { 
type: "button"
}
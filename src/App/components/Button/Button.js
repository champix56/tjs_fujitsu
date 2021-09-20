import React, { useState } from "react";
import "./Button.css";
import PropTypes from "prop-types";

function Button(props) {
  const [clicked, setClicked] = useState(false);
  console.log(props);
  return (
    <button
      className={clicked ? "Button clicked" : "Button"}
      onClick={(evt)=>{
        setClicked(true);
        props.onLeftClick(evt);
        setTimeout(()=>{setClicked(false)},300);
      }}
      type={props.type}
      style={ {...props.style,backgroundColor:props.backgroundColor, color:props.color} }
    >
      {props.children}
    </button>
  );
}
Button.propTypes = {
  children: PropTypes.any.isRequired,
  onLeftClick: PropTypes.func.isRequired,
  type:PropTypes.string,
  backgroundColor:PropTypes.string.isRequired,
  color: PropTypes.string,
  style:PropTypes.object,
};
Button.defaultProps = {
  children: "Hello ... de lu",
  onLeftClick: () => {},
  backgroundColor:'green',
  color:'white'
};
export default Button;

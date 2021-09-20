import React from "react";
import "./Button.css";
import PropTypes from 'prop-types'
function Button(props) {
  console.log(props);
  return <button className="Button" onClick={()=>{
    alert('on a clicker sur benjamin')
  }}>{props.children}</button>;
}
Button.propTypes={
  children : PropTypes.any.isRequired,
  onLeftClick: PropTypes.func.isRequired,
}
Button.defaultProps={
  children:'Hello ... de lu',
  onLeftClick:()=>{  }

}
export default Button;

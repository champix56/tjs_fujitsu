import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./Navbar.module.css";
// import de bootstrap en mode static dans le <head></head> de index.html (css, $, js bootstrap)
// import '../../../../node_modules/bootstrap/dist/css/bootstrap.css'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
  return (
    <nav
      className={"navbar navbar-inverse " + styles.Navbar}
      data-testid="Navbar"
    >
      <div className="container-fluid">
        <div className="navbar-header" style={{ color: "grey", fontSize: "20pt" }}>
          <Link className="navbar-brand" to="/">
            <span style={{ fontWeight: "900" }}>Meme</span>
            <span style={{ color: "tomato" }}>.</span>
            <span style={{ fontStyle: "italic" }}>js</span>
          </Link>
        </div>
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav">
            <li className="">
              <Link to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li>
              <Link to="/thumbnail">thumbnail</Link>
            </li>
            <li>
              <Link to="/editor">new meme</Link>
            </li>
            <li style={{marginLeft:'40px' , color:'red'}}>
              <Link to="/azerty">chemin innexistant</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {};
Navbar.defaultProps = {};

export default Navbar;

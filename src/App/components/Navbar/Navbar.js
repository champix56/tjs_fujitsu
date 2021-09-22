import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./Navbar.module.css";
// import de bootstrap en mode static dans le <head></head> de index.html (css, $, js bootstrap)
// import '../../../../node_modules/bootstrap/dist/css/bootstrap.css'
const navbarInitialState = {};
const Navbar = (props) => {
  return (
    <nav
      className={"navbar navbar-inverse " + styles.Navbar}
      data-testid="Navbar"
    >
      <div className="container-fluid">
        <div className="navbar-header" style={{ color: "grey", fontSize: "20pt" }}>
          <a className="navbar-brand" href="#">
            <span style={{ fontWeight: "900" }}>Meme</span>
            <span style={{ color: "tomato" }}>.</span>
            <span style={{ fontStyle: "italic" }}>js</span>
          </a>
        </div>
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav">
            <li className="">
              <a href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li>
              <a href="#">thumbnail</a>
            </li>
            <li>
              <a href="#">new meme</a>
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

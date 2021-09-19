import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {NavLink} from "react-router-dom";

const Navbar = (props) => {
  return(
    <div className="navbar">
      <div className="brand-name">Contact Manager</div>
      <div className="nav-actions">
        <div>
          <NavLink className="navlink" exact to="/">
            <FontAwesomeIcon icon="home"/>Home
          </NavLink>
        </div>
        <div>
          <NavLink className="navlink" to="/add" action="Add">
            <FontAwesomeIcon icon="plus"/>Add
          </NavLink>
        </div>
        <div>
          <NavLink className="navlink" to="/about">
            <FontAwesomeIcon icon="question"/>About
          </NavLink>
        </div>
      </div>
    </div>
  )
};

export default Navbar;
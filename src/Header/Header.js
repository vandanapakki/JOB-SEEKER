import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";

function Header(props) {
  return (
    <nav>
      <ul className={classes.testHeader}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Ui1V3kwOkY_oRoSZgRBCLXDieE_Dqfce0g&usqp=CAU"
          alt="job"
          width="25% "
        />
        <NavLink className={classes.base12} to="/home">
         Job Seeker
        </NavLink>
        <NavLink className={classes.base12} to="/about">
          Company
        </NavLink>
        <NavLink className={classes.base12} to="/contact">
          Admin
        </NavLink>
        <NavLink activeClassName={classes.active} to="/productpage"></NavLink>
        <NavLink className={classes.base12} to="/login"></NavLink>
      </ul>
      <div>
        <br />
        <br />
        <br />
      </div>
    </nav>
  );
}
export default Header;

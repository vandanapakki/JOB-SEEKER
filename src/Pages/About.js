import React from "react";
import Header from "../Header/Header";
import classes from "./About.module.css";
import  "./Button.css"

export default function About() {
  return (
    <section>
      <Header />
      <div className={classes.about}>
        <h1>Company Details</h1>
        
          <div className="button">
        <button onClick={()=>{alert("Do you want to add jobs")}}>Add Jobs</button>
        </div>
        <div className="button">
          <button onClick={()=>{alert("Do you want to update")}}>Update Jobs</button>
        </div>
        </div>
    
    </section>
  );
}

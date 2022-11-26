import React from 'react'
import { useRef } from 'react'
import Header from '../Header/Header';
import classes from './ContactUs.module.css'

function ContactUs() {
       
    
  return (
    <>
    <Header/>    
    <div className={classes.about}>
        <h1>Admin</h1>
        
          <div className="button">
        <button onClick={()=>{alert("Do you want to add jobs")}}>Jobs without apply</button>
        </div>
        <div className="button">
          <button onClick={()=>{alert("Do you want to update")}}>Modify Company Job</button>
        </div>
        </div>
    
    </>
  )
}

export default ContactUs

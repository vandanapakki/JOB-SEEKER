import React from 'react'
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

function Header(props) {
    
   
  return (
    <nav>
        
        <ul className={classes.testHeader}>
            <li> Home </li>
            <li> 
              <NavLink to='store'>Store</NavLink> 
              </li>
            <li > 
              <NavLink to='/about'>About</NavLink> 
              </li>
        <div className={classes.shoppingCart}>
            <HeaderCartButton onClick={props.onShowCart}/>
            </div>
        </ul>
        <div>
        <br/>
        <br/>
        <br/>
        </div>
        
    </nav>
    
    
  )
}
export default Header;

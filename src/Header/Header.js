import React from 'react'
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

function Header(props) {
    
   
  return (
    <div>
        
        <div className={classes.testHeader}>
        <span> Home  </span>
        <span> Store  </span>
        <span> About  </span>
        <div className={classes.shoppingCart}>
            <HeaderCartButton onClick={props.onShowCart}/>
            </div>
        </div>
        
        
    </div>
    
    
  )
}
export default Header;

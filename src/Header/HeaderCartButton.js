import React from 'react'


import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css';

export default function HeaderCartButton(props) {

return (
    <div>
        <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span>Cart</span>
        
         </button>
         
      
    </div>
  )
}

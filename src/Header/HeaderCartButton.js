import React from 'react'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css';

export default function HeaderCartButton() {
  return (
    <div>
        <button className={classes.button}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span>Cart</span>
        </button>
      
    </div>
  )
}

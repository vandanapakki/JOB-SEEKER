import React from 'react'
import classes from './CartItem.module.css'

export default function CartItem(props) {
  return (
    <li className={classes['cart-item']}>
    <div >
     <img src={props.url} alt='img' height='50px'></img>
     <h2>Title: {props.title}</h2>
      <div className={classes.summary}>
        <span className={classes.price}>Price: {props.price}</span>
        <span className={classes.amount}>Quantity: {props.quantity}</span>
      </div>
      <div className={classes.actions}>
        <button >Remove</button>
      </div>
    </div>
    </li>
  )
}

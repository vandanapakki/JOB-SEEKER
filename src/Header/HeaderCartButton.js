import React  from 'react'
import { useContext } from 'react';
import CartContext from '../Store/Cart-Context';


// import CartIcon from '../Cart/CartIcon'
// import CartContext from '../Store/Cart-Context';
import classes from './HeaderCartButton.module.css';

export default function HeaderCartButton(props) {


    const cartLength=useContext(CartContext)

    console.log("cartt",cartLength.length )

//     const cartctx=useContext(CartContext)
    
//     let quantity=cartctx.items.reduce((curr,item)=>{
//         return curr+item.quantity
//     },0);

//    console.log("cartLength ",cartLength)

return (
    <div>
        <button className={classes.button} onClick={props.onClick}>
        <span>Cart </span>
        {/* <span className={classes.badge}>{quantity}</span> */}
        
         </button>
         
      
    </div>
  )
}

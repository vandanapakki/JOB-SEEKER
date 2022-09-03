import React, { useContext } from 'react'
import CartContext from '../../Store/Cart-Context';
import classes from './ProductItem.module.css'

export default function ProductItem(props) {
   
  const cartCtx= useContext(CartContext)

  const addItemToCart=(event)=>{
    event.preventDefault();    

    
    const data={
      title: props.title,
      price:props.price,
      id:props.id,
      url:props.url,
      quantity:props.quantity
      

    }
    
    cartCtx.addItem(data)
    
 }
  return (

    <form onSubmit={addItemToCart}>    
    <div className={classes.product}>
    <h2>{props.title}</h2>  
      <div className={classes['product-image']}>
      <img src={props.url} alt='img'></img>
      </div> 
        
    </div>
    <div className={classes['product-price']}>${props.price}</div>
         <button >Add to Cart</button>
    </form>
    
    
  )
}

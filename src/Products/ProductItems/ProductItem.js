import React from 'react'
import ProductItemForm from './ProductItemForm'
import classes from './ProductItem.module.css'

export default function ProductItem(props) {
  return (
    <div className={classes.product}>
      <h2>{props.title}</h2>
      <div className={classes['product-image']}>
      <img src={props.url} alt='img'></img>
      </div>
       <div className={classes['product-price']}>${props.price}</div>
      <div>
        <ProductItemForm id={props.id} />
     </div>
    </div>
    
  )
}

import React from 'react'
import ProductItemForm from './ProductItemForm'

export default function ProductItem(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      
      <img src={props.url} alt='img'></img>
      <div>${props.price}</div>
      <div>
        <ProductItemForm id={props.id} />
     </div>
    </div>
    
  )
}

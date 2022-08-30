import React from 'react'
import CartItem from './CartItem'

const cartElements = [

    {
    
    title: 'Colors',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
    quantity: 2,
    
    },
    
    {
    
    title: 'Black and white Colors',
    
    price: 50,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
    quantity: 3,
    
    },
    
    {
    
    title: 'Yellow and Black Colors',
    
    price: 70,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
    quantity: 1,
    
    }
    
    ]

 const Cart = (props) => 
{
    const cartItems= cartElements.map((item)=>(
        <CartItem key={item.id}
        title={item.title}
        price={item.price}
        url={item.imageUrl}
        quantity={item.quantity}
        />


    ))
    
  return (
    <div>
      {cartItems}
      <button onClick={props.onClose}>Close</button>
    </div>
  )
}

export default Cart;
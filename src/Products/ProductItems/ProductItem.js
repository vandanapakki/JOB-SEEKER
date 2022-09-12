import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import CartContext from '../../Store/Cart-Context';
// import classes from './ProductItem.module.css'

export default function ProductItem(props) {
   
  const cartCtx= useContext(CartContext)

  const addItemToCart=(event)=>{
    event.preventDefault();    

    
    const data={
      key: props.key,
      title: props.title,
      price:props.price,
      id:props.id,
      url:props.url,
      quantity:props.quantity
      

    }
    
    cartCtx.addItem(data)

    fetch("https://crudcrud.com/api/2e4ead4efc5345aea92e4f7d046337de/carttestgmailcom",{
      method:"POST",
      body:JSON.stringify(data),
      headers:{
        "Content-Type":"application/json"
      }
    }).then((res)=>{
      if(res.ok){
        return res.json()
      }
    }).then((data)=>{
      console.log(data)
      }).catch((err)=>{
        alert(err)
      })
    
 }
  return (

    <form onSubmit={addItemToCart}>    
    <div >
      <Link to='/productdetails/:productName'>
      <h2>{props.title}</h2>  
      <div >
           <img src={props.url} alt='img'></img>
       </div>
       </Link>
      <div >
        ${props.price}
      </div>         
         <button >Add to Cart</button>         
         </div>          
    </form>
    
    
  )
}

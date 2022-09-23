import React, { useContext, useEffect, useState } from "react";
import CartContext from "../Store/Cart-Context";
import classes from "./CartItem.module.css";


export default function CartItem(props) {
  // console.log("props", props.quantity);

 const  cartCntxt=useContext(CartContext)
  // cartCntxt.items(props)
  const onRemove = () => {
    
    fetch(`https://crudcrud.com/api/a12ad6ab1afc43e98af99a04c20a4b73/carttestgmailcom/${props._id}`,{
      method:"DELETE"
    }).then((res)=>{
      console.log(res)
      alert("deleted")      
       cartCntxt.removeItem(props.id)

       }).catch((err)=>{
      alert(err)
    })
    
  };

  return (
    <li className={classes["cart-item"]}>
      <div className={classes["image-box"]}>
        <img src={props.url} alt="img" height="50px"></img>
      </div>
      <h3 className={classes.title}>Title: {props.title}</h3>
      <div className={classes.summary}>
        <span className={classes.price}>
          Price: {props.price} Quantity: {props.quantity}
        </span>
      </div>

      <div className={classes.actions}>
        <button onClick={onRemove} >x</button>
      </div>
    </li>
  );
}

import React from "react";
import classes from "./CartItem.module.css";
import { useContext } from "react";
import CartContext from "../Store/Cart-Context";

export default function CartItem(props) {
  console.log("props", props.quantity);
  
  const cntxt = useContext(CartContext);

  const onRemove = () => {
    // props.removeItem(props.id);
    console.log("id",props._id)
    fetch(`https://crudcrud.com/api/b6075f4ad6c04df5a889099e74d66970/carttestgmailcom/${props._id}`,{
      method:"DELETE"
    }).then((res)=>{
      console.log(res)
      alert("deleted")
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
        <button onClick={onRemove}>x</button>
      </div>
    </li>
  );
}

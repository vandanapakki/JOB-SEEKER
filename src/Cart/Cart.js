import React from "react";
import CartItem from "./CartItem";
import CartContext from "../Store/Cart-Context";
import { useContext } from "react";
import Modal from "../UI/Modal";

const Cart = (props) => {
  let total = 0;
  const cartcntx = useContext(CartContext);
  
 const length= cartcntx.items.length
   const purchaseItemHandler = (item) => {
    if (item.quantity < 1) {
         alert("You have Nothing in Cart , Add some products to purchase !");
    } else {
       
        alert("Thanks for purchase");
    }
  };

  
  
  cartcntx.items.forEach((item) => {
    total = total + Number(item.price) * Number(item.quantity);
  });
  total = `$ ${total.toFixed(2)}`;

  const cartItems = cartcntx.items.map((item) => (
    <CartItem
      key={item.id}
      title={item.title}
      id={item.id}
      price={item.price}
      url={item.imageUrl}
      quantity={item.quantity}
       />
  ));

  return (
    <Modal onClose={props.onClose}>
      <div>
        <button onClick={props.onClose}>Close</button>
      </div>
      {cartItems}
      <div>
        <span>Total Amount</span>
        {total}
      </div>

      {length && <button onClick={purchaseItemHandler}>Purchase</button>}
    </Modal>
  );
};

export default Cart;

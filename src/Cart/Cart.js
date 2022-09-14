import React from "react";
import CartItem from "./CartItem";
import CartContext from "../Store/Cart-Context";
import { useContext } from "react";
import Modal from "../UI/Modal";
import { useEffect } from "react";
import { useState } from "react";
import { useCallback } from "react";

const Cart = (props) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // let total = 0;
  const cartcntx = useContext(CartContext);

  const length = products.length;
  console.log("length",length)
  console.log("cartcntx", cartcntx.length)
  const purchaseItemHandler = (item) => {
    if (item.quantity < 1) {
      alert("You have Nothing in Cart , Add some products to purchase !");
    } else {
      alert("Thanks for purchase");

    }
  };
let total=0

  products.forEach((item) => {
      total = total + Number(item.price) * Number(item.quantity);
  });
  total = `$ ${total.toFixed(2)}`;

  useEffect(() => {
    getProductData();
  }, []);

  const getProductData = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://crudcrud.com/api/b6075f4ad6c04df5a889099e74d66970/carttestgmailcom"
      );
      if (!response.ok) {
        throw new Error("Something went wrong....");
      }

      const data = await response.json();
       setProducts(data);
      

    } catch (err) {
      console.log(err.message);
    }

    setIsLoading(false);
  }, []);
 

  return (
    <Modal onClose={props.onClose}>
      <div>
        <button onClick={props.onClose}>Close</button>
      </div>
      {products.map((item) => (
        <CartItem
          key={item.key}
          title={item.title}
          _id={item._id}
          price={item.price}
          url={item.url}
          quantity={item.quantity}
        />
      ))}
      <div>
        <span>Total Amount: </span>
        {total}
      </div>

      {length && <button onClick={purchaseItemHandler}>Purchase</button>}
      
    </Modal>
  );
};

export default Cart;

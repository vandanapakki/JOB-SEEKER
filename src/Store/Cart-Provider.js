import React from "react";
import { useState } from "react";
import CartContext from "./Cart-Context";

const CartProvider = (props) => {
  const [items, updateItems] = useState([]);
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token"));

  const addItemToCartHandler = (item) => {
    let hasItem = false;

    const newItemArray = [...items];
    newItemArray.forEach((element, index) => {
      if (item.id === element.id) {
        hasItem = true;
        // newItemArray[index].quantity=Number(newItemArray[index].quantity)+Number(item.quantity);
        alert("Item already added");
      }
    });

    if (hasItem === false) updateItems([...items, item]);
    else updateItems(newItemArray);
  };


  const removeItemFromCartHandler = (id) => {
    let newItemArray = [...items];
    console.log("id", id);
    const index=newItemArray.findIndex((element) => {
       return element.id===id;

        // console.log("eleid",element.id)
       
      }
    );
    newItemArray.splice(index, 1);
    console.log("newItem",newItemArray,index)
    updateItems(newItemArray);
  };

  // const token = localStorage.getItem("token");
  const userIsLoggedIn = !!token;

  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
    localStorage.getItem("token");

    setIsLoggedin(true);
  };
  const cartContext = {
    items: items,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    token: userIsLoggedIn,
    isLoggedin: isLoggedin,
    login: loginHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;

import React from "react";
import CartItem from "./CartItem";
import CartContext from "../Store/Cart-Context";
import { useContext } from "react";
import Modal from "../UI/Modal";
import { useEffect } from "react";
import { useState } from "react";


const Cart = (props) => {
  const [products,setProducts]=useState([])
  const[error,setError]=useState(null)
  const[data,setData]=useState(false)
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

  // const cartItems = cartcntx.items.map((item) => (
  //   <CartItem
  //     key={item.key}
  //     title={item.title}
  //     id={item.id}
  //     price={item.price}
  //     iurl={item.imageUrl}
  //     quantity={item.quantity}
  //      />
  // ));

  useEffect(()=>{
    getProductData();
    setData(true);
    console.log("ABhi")
  },[])
  // let cartItems=[];
  async function getProductData (){
    setError(null)
    try{
    const response= await fetch("https://crudcrud.com/api/2e4ead4efc5345aea92e4f7d046337de/carttestgmailcom");
    if(!response.ok){
      throw new Error("Something went wrong....")
    }
    const data= await response.json();
    console.log(data)
    const cartItem=[1,2,3,4,5];
    // for(const key in data){
    // cartItem.push({
    //   title: data[key].title,
    //   price: data[key].price,
    //   // amount: data[1].amount,
    //   id: data[key].id,
    //   url: data[key].url,
    // });
  // }
  
  setProducts(cartItem)
  cartcntx.items=products;
  console.log("cart",products)
  console.log("cart Item",cartcntx.items)
   } catch(err){
    setError(err.message)
    console.log(err.message)
  }
  }
  
 
  // .then((data)=>{
  //   console.log("get data",data)
  //   const cartProduct=[];
  //   for(const key in data){
  //     cartProduct.push({
  //       id:key,
  //       title:data[key].title,
  //       price:data[key].price,
  //       amount:data[key].amount
  //     })
  //   }
   
  // }).catch(err=>{
  //   console.log(err)
  // })
  return (
    <Modal onClose={props.onClose}>
      <div>
        <button onClick={props.onClose}>Close</button>
      </div>
      {data && 
      
      cartcntx.items.map((item) => (
     <CartItem
      key={item.key}
      title={item.title}
      id={item.id}
      price={item.price}
      iurl={item.imageUrl}
      quantity={item.quantity}
       />
      ))}
       <div>
        <span>Total Amount</span>
        {total}
      </div>

      {length && <button onClick={purchaseItemHandler}>Purchase</button>}
    </Modal>
  );
};

export default Cart;

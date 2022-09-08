import React from "react";
// import { Link } from "react-router-dom";
import ProductItem from "./ProductItems/ProductItem";
import classes from './Product.module.css';



  const productsArr = [
    
    {
      id:'1',

      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

        quantity:1,
    },

    {
      id:'2',

      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
        quantity:1,
    },

    {
      id:'3',

      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
        
        quantity:1,
      },

    {
      id:'4',

      title: "Blue Color",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
        quantity:1,
    },
    
  ];
  
  const Product = ()=>{
    const productItem=productsArr.map((ele)=>
        <ProductItem 
        key={ele.id}
        id={ele.id}
        title={ele.title}
        price={ele.price}
        url={ele.imageUrl}
        quantity={ele.quantity}/>
    )
  return (
    <section className={classes.product}>
       {/* <h1> Music </h1> */}
      <ul>
         {productItem} 
      </ul>
    </section>
  )

  
}

export default Product;

import React from "react";
import ProductItem from "./ProductItems/ProductItem";
import classes from './Product.module.css';

  const productsArr = [
    {
      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },

    {
      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
      title: "Blue Color",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  const Product = ()=>{
    const productItem=productsArr.map((ele)=>
        <ProductItem 
        key={ele.key}
        id={ele.id}
        title={ele.title}
        price={ele.price}
        url={ele.imageUrl}/>
    )
  return (
    <div className={classes.newsbox}>
      <div className={classes.product}>
    <h1> Music </h1>
</div>
      <ul>
        {productItem}
      </ul>
    </div>
  )

  
}

export default Product;

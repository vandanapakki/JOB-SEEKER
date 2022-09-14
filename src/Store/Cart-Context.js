import React from "react";

const CartContext=React.createContext({
    token:'',
    isLoggedin:false,
    login:(token)=>{},
    items: [],
    length: '' ,
    addItem: (item)=>{},
    removeItem: (id)=>{}
});

export default CartContext;
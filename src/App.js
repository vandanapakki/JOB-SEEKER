import React, { useState } from "react";
import Header from "./Header/Header";
import "./App.css";
import Product from "./Products/Product";
import Footer from "./Footer/Footer";
import Header2 from "./Header/Header2";
import CartProvider from "./Store/Cart-Provider";
import { Redirect, Route, Switch } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import ContactUs from "./Pages/ContactUs";
import ProductDetails from "./Pages/ProductDetails";
import Login from "./Pages/Login";
import ProductPage from "./Pages/ProductPage";
import { useContext } from "react";
import CartContext from "./Store/Cart-Context";

function App() {
  const cartCtx = useContext(CartContext);
 
  console.log("..token",cartCtx.token)
  return (
    <CartProvider>
      
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/contact">
          <ContactUs />
        </Route>
        <Route path="/productdetails/:productName">
          <ProductDetails />
        </Route>
        <Route path="/productpage">
          {cartCtx.token? <ProductPage />: <Login/>}
        </Route>
           <Route path="/login">
            <Header/>
            <Header2 />
            <Login />
          </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
      <Footer />
    </CartProvider>
  );
}

export default App;

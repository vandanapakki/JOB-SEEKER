import React, { useState } from "react";
import Header from "./Header/Header";
import "./App.css";
import Product from "./Products/Product";
import Footer from "./Footer/Footer";
import Header2 from "./Header/Header2";
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

   return (
    <>
      
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
        {cartCtx.isLoggedin ? 
        <Route path="/productpage">          
          <ProductPage />
        </Route>: <Login/>}
          {!cartCtx.isLoggedin && <Route path="/login">
            <Header/>
            <Header2 />
            <Login />
          </Route>}
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;

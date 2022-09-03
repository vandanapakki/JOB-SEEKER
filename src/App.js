import React,{useState} from 'react';
import Header from './Header/Header';
import './App.css';
import Product from './Products/Product';
import Footer from './Footer/Footer';
import Header2 from './Header/Header2';
import Cart from './Cart/Cart';
import CartProvider from './Store/Cart-Provider';
import { Route } from 'react-router-dom';
import About from './Pages/About';





function App() {
   
  const[showCart, setShowCart]=useState(false)
  const showCartHandler=()=>{
   setShowCart(true);
  }

  const hideCartHandler=()=>{
    setShowCart(false)
  }


  return (
    <CartProvider>  
      
          <Header onShowCart={showCartHandler}/>
            <Header2/>
            {showCart && <Cart onClose={hideCartHandler}/>}
             <Product/>
            <Footer/>  
            <Route path='/about' >
             <About/>
            </Route>     
             
       </CartProvider>
  );
}

export default App;

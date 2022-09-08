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
import Home from './Pages/Home';
import HomeHeader from './Pages/HomeHeader';
import ContactUs from './Pages/ContactUs';





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
            
            <Route path='/store'>
            <Header2/>
            {showCart && <Cart onClose={hideCartHandler}/>}

             <Product/>
            </Route>        
            <Route path='/about' >
            <Header2/>
             <About/>
            </Route>  
              <Route path='/home'>
                <HomeHeader/>
              <Home/>
              </Route> 
              <Route path='/contact' >
            <Header2/>
             <ContactUs/>
            </Route> 
            <Footer/>   
             
       </CartProvider>
  );
}

export default App;

import React,{useState} from 'react';
import Header from './Header/Header';
import './App.css';
import Product from './Products/Product';
import Footer from './Footer/Footer';
import Header2 from './Header/Header2';
import Cart from './Cart/Cart';



function App() {
   
  const[showCart, setShowCart]=useState(false)
  const showCartHandler=()=>{
   setShowCart(true);
  }

  const hideCartHandler=()=>{
    setShowCart(false)
  }


  return (
    <div>     
      <Header onShowCart={showCartHandler}/>
      <Header2/>
      {showCart && <Cart onClose={hideCartHandler}/>}
      <Product/>
      <Footer/>
    </div>
  );
}

export default App;

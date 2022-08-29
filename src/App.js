import React from 'react';
import Header from './Header/Header';
import './App.css';
import Product from './Products/Product';
import Footer from './Footer/Footer';
import Header2 from './Header/Header2';


function App() {
  return (
    <div>     
      <Header/>
      <Header2/>
      <Product/>
      <Footer/>
    </div>
  );
}

export default App;

import React, { Suspense } from "react";
import "./App.css";
import Footer from "./Footer/Footer";
import Header2 from "./Header/Header2";
import { Redirect, Route, Switch } from "react-router-dom";
import { useContext } from "react";
import CartContext from "./Store/Cart-Context";


const About = React.lazy(() => import("./Pages/About"));
const Home = React.lazy(() => import("./Pages/Home"));
const ContactUs = React.lazy(() => import("./Pages/ContactUs"));
const ProductDetails = React.lazy(() => import("./Pages/ProductDetails"));
const Login = React.lazy(() => import("./Pages/Login"));
const ProductPage = React.lazy(() => import("./Pages/ProductPage"));

function App() {
  const cartCtx = useContext(CartContext);

  return (
    <>
      <Suspense  fallback={<p>Loading...</p>}>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/contact">
            <ContactUs />
          </Route>
          <Route path="/productdetails/:productName">
            <ProductDetails />
          </Route>
          {!cartCtx.isLoggedin ? (
            <Route path="/productpage">
              <ProductPage />
            </Route>
          ) : (
            <Login />
          )}
          {/* {!cartCtx.isLoggedin && ( */}
            <Route path="/login">
              <Header2 />
              <Login />
            </Route>
          {/* )} */}
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
        </Switch>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;

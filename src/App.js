import React, { Suspense } from "react";
import "./App.css";
import Footer from "./Footer/Footer";
import { Redirect, Route, Switch } from "react-router-dom";
import { useContext } from "react";
import CartContext from "./Store/Cart-Context";

const About = React.lazy(() => import("./Pages/About"));
const Home = React.lazy(() => import("./Pages/Home"));
const ContactUs = React.lazy(() => import("./Pages/ContactUs"));
const Login = React.lazy(() => import("./Pages/Login"));

function App() {
  const cartCtx = useContext(CartContext);

  return (
    <div className="App">
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
        <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          
            {cartCtx.isLoggedin?(<Route path="/about">
              <About />
            </Route>):(
              <Login/>
            )}
          
          
          {cartCtx.isLoggedin ? (<Route path="/contact">
            <ContactUs />
          </Route>
          ) : (
            <Login />
          )}
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
        </Switch>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;

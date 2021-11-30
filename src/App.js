import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import './App.css'
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SigninAndSignup from './pages/signin-and-signup/signin-and-signup.component';


function App() {

  
  return (
    <div>
     <Header />
    <Switch>
    {/* router props are passed only to its direct children */}
      <Route path="/" exact component={HomePage} />     
      <Route path="/shop" component={ShopPage} />
      <Route path="/signin" component={SigninAndSignup} />
      {/* <Route path="/contact" component={ContactPage} /> */}
    </Switch>
    </div>
  );
}

export default App;

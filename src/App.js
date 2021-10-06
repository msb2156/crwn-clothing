import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import './App.css'
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
function App() {

  
  return (
    <div>
    <Switch>
    {/* router props are passed only to its direct children */}
      <Route path="/" exact component={HomePage} />
      <Route path="/shop" component={ShopPage} />
    </Switch>
    </div>
  );
}

export default App;

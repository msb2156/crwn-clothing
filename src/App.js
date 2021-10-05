import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import './App.css'
import { Switch, Route } from 'react-router-dom';
import Hats from './components/menu-item/hats';

function App() {

  
  return (
    <div>
    <Switch>
    {/* router props are passed only to its direct children */}
      <Route path="/" exact component={HomePage} />
      <Route path="/hats" exact component={Hats} />
    </Switch>
    </div>
  );
}

export default App;

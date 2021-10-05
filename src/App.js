import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import './App.css'
import { Switch, Route } from 'react-router-dom';

function App() {

  
  return (
    <div>
    <Switch>
      <Route path="/" exact component={HomePage} />
    </Switch>
    </div>
  );
}

export default App;

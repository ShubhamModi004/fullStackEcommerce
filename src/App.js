import React from 'react';
import logo from './logo.svg';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Homepage from './pages/Homepage/Homepage'

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;

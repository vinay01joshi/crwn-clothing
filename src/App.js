import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/home/homepage.component';
import ShopPage from './pages/shop/shoppage.component'
import './App.css';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;

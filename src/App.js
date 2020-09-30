import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/home/homepage.component';
import './App.css';

function App() {
  return (
    <div>
      <Switch>
        <Route exact='/' component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;

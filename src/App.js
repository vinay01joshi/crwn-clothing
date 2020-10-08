import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/header/header.component'
import HomePage from './pages/home/homepage.component';
import ShopPage from './pages/shop/shoppage.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import './App.css';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {

  unSubscribeFromAuth = null;
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      this.unSubscribeFromAuth = this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={SignInAndSignUp} />
        </Switch>
      </div >
    );
  }
}

export default App;

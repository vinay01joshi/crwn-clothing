import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
import Header from './components/header/header.component'
import HomePage from './pages/home/homepage.component';
import ShopPage from './pages/shop/shoppage.component';
import CheckoutPage from './pages/checkout/checkout.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import './App.css';
import { auth, CreateUserProfileDocument, addCollectionAndDocuments } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.action';
import { selectCurrentUser } from './redux/user/user.selectors';
import { selectCollectionPreview } from './redux/shop/shop.selectors'

class App extends React.Component {
  unSubscribeFromAuth = null;

  componentDidMount() {

    const { setCurrentUser, collectionArray } = this.props;

    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await CreateUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }
      setCurrentUser(userAuth);
      addCollectionAndDocuments('collection', collectionArray.map(({ title, items }) => ({ title, items })))
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route exact path='/signin'
            render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUp />)} />
        </Switch>
      </div >
    );
  }
}

const mapStateToProps = (state) => createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionArray: selectCollectionPreview
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

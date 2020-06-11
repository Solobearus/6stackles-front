import React from 'react';
import './App.css';
import { Provider } from "react-redux";
import store from "./store/store";
import Header from './components/Header/Header'
import SignIn from './pages/SignIn/SignIn'
import SignUp from './pages/SignUp/SignUp'
import Products from './pages/Products/Products'
import verifyToken from './api'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {

  const token = localStorage.getItem('token')
  let varified = false;

  // if (token)
  //   varified = await verifyToken(token);

  return <Route {...rest} render={(props) => (
    varified
      ? <Component {...props} />
      : <Redirect to='/signIn' />
  )} />
}

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Router>
          <Switch>
            <Route path="/signIn">
              <SignIn />
            </Route>
            <Route path="/signUp">
              <SignUp />
            </Route>
            <PrivateRoute path="/products" component={Products}>
            </PrivateRoute>
            <Route exact path="/">
              {/* url not found */}
            </Route>
          </Switch>
        </Router>
      </div>
    </Provider >
  );
}

export default App;

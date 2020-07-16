import React from "react";
import "./root.css";
import "./App.css";
import Header from "./components/Header/Header";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Products from "./pages/Products/Products";
import Product from "./pages/Product/Product";
import Search from "./pages/Search/Search";
import Profile from "./pages/Profile/Profile";
import CreateProduct from "./pages/CreateProduct/CreateProduct";
import { useSelector } from "react-redux";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

// !!! will be used once connection to backend is implemented !!!

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { token } = useSelector((state) => state.userAuth);

  return (
    <Route
      {...rest}
      render={(props) =>
        token ? <Component {...props} /> : <Redirect to="/signIn" />
      }
    />
  );
};

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/signIn">
            <SignIn />
          </Route>
          <Route path="/signUp">
            <SignUp />
          </Route>
          <PrivateRoute exact path="/products" component={Products} />
          <PrivateRoute exact path="/products/create" component={CreateProduct} />
          <PrivateRoute path="/products/edit/:id" component={CreateProduct} />
          <PrivateRoute path="/product/:id" component={Product} />
          <PrivateRoute path="/search" component={Search} />
          <PrivateRoute path="/profile" component={Profile} />
          <PrivateRoute path="/">
            <Redirect to="/products" />
          </PrivateRoute>
        </Switch>
      </Router>
    </div>
  );
};

export default App;

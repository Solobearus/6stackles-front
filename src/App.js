import React, { useEffect } from "react";
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
  Link,
} from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCheckSquare,
  faBars,
  faPlusCircle,
  faShoppingCart,
  faHome,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";
import { fab, faCottonBureau } from "@fortawesome/free-brands-svg-icons";
library.add(
  fab,
  faCheckSquare,
  faBars,
  faPlusCircle,
  faShoppingCart,
  faHome,
  faAddressCard
);

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
          <Route exact path="/products" component={Products} />
          <Route exact path="/products/create" component={CreateProduct} />
          <Route path="/product/:id" component={Product} />
          <Route path="/search" component={Search} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;

import React, { useEffect, useState } from "react";
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
import { verify } from "./api";
import { BrowserRouter as Router, Switch, Route, Redirect, useHistory } from "react-router-dom";

// !!! will be used once connection to backend is implemented !!!

const PrivateRoute = ({ component: Component, ...rest }) => {
  let history = useHistory();
  const { token } = useSelector((state) => state.userAuth);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const func = async () => {
      const verifyResult = await verify(token);

      console.log(verifyResult)

      if (verifyResult.err) {
        history.push("/signIn");
      } else {
        setLoading(false);
      }
    };
    func();
  }, []);

  //TODO: find a way to make more readable
  return <Route {...rest} render={(props) => (loading ? <div>loading...</div> : token ? <Component {...props} /> : <Redirect to="/signIn" />)} />;
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
          <PrivateRoute exact path="/products/create" component={CreateProduct} />
          <PrivateRoute path="/products/edit/:id" component={CreateProduct} />
          <Route path="/product/:id" component={Product} />
          <Route path="/search" component={Search} />
          <PrivateRoute path="/profile" component={Profile} />
          <Route path="/">
            <Redirect to="/products" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;

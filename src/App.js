import React from 'react';
import './App.css';
import { Provider } from "react-redux";
import store from "./store/store";
import Header from './components/Header/Header'
import SignIn from './components/SignIn/SignIn'
import SignUp from './components/SignUp/SignUp'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Router>
          <Switch>
            <Route path="/SignIn">
              <SignIn />
            </Route>
            <Route path="/SignUp">
              <SignUp />
            </Route>
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

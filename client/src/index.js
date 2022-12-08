import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import Login from './login.component'  
import RegisterBuyer from './RegisterBuyer'
import RegisterSeller from './RegisterSeller'
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import ThemeContextWrapper from "./components/ThemeWrapper/ThemeWrapper";
import BackgroundColorWrapper from "./components/BackgroundColorWrapper/BackgroundColorWrapper";
import history from './history';
 
ReactDOM.render(   
  <ThemeContextWrapper>
  <BackgroundColorWrapper>
    <Router history={history}>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route path="/RegisterBuyer" component={RegisterBuyer} />
        <Route path="/RegisterSeller" component={RegisterSeller} />

      </Switch>
    </Router>
  </BackgroundColorWrapper>
</ThemeContextWrapper>,
  document.getElementById("root")
);
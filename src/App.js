import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Details from "./components/Details/Details";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact component={Login} path="/" />
        <Route component={Home} path="/home" />
        <Route component={Details} path="/details/:id" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;

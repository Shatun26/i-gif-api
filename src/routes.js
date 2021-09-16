import React, { useEffect, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Main from './pages/Main';
import Register from './pages/Register';
import * as H from './index.styled';

export default function useRoutes(isAuth) {
// const [bgp, setbgp] = useState(0);
const [bgp, setBgp] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setBgp(bgp => bgp + 0.5);
  }, 50);
  return () => clearInterval(interval);
}, []);

  if (isAuth) {
    return (
      <Switch>
        <Route path="/main">
          <Main />
        </Route>
        <Redirect to="/main" />
      </Switch>
    );
  }
  return (
    <H.AnimationWrapper bgp={bgp}>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Redirect to="/" />
      </Switch>
    </H.AnimationWrapper>
  );
}

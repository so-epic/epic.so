import React, { useRef, useState } from 'react';

import { useMorph, easeOut } from 'react-morph';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import MainPage from '../../components/MainPage'
import ContentPage from '../../components/ContentPage'

import '../../styles/app.css'


const App = () => {
  return (
      <Router>
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route path="/blog">
            <ContentPage />
          </Route>
        </Switch>
      </Router>
  );
}

export default App;

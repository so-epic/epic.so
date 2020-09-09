import React from 'react';


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import MainPage from '../../components/MainPage'
import BlogPage from '../../components/BlogPage'
import PrivacyPolicyPage from '../../components/PrivacyPolicyPage'

import '../../styles/app.css'


const App = () => {
  return (
      <Router>
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route path="/blog">
            <BlogPage />
          </Route>
          <Route path="/privacy-policy">
            <PrivacyPolicyPage />
          </Route>
        </Switch>
      </Router>
  );
}

export default App;

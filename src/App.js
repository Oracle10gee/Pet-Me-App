import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from './components/landing-page';

function App () {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={LandingPage} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;

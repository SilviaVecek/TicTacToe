import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './components/Home';
import Error from './components/Error'
import Game from './components/Game';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/game" component={Game} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>

    );
  }
}

export default App;

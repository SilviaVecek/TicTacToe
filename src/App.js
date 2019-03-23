import React, { Component, useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './components/Home';
import Error from './components/Error'
import Game from './components/Game';

const App = () => {
    const [ timelimit, setTimelimit ] = useState(Infinity);
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" render={() => <Home {
            ...{timelimit, setTimelimit}
          } />} exact />

          <Route path="/game" render={() => <Game {...{timelimit}}/>} />
          
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    );
}

export default App;

import React, { Component, useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './components/Home';
import Error from './components/Error'
import Game from './components/Game';
import createEmptyGrid from './shared/state';



const App = () => {
    const [ timeLimit, setTimeLimit ] = useState(Infinity);
    const [ playerName1, setPlayerName1 ] = useState("Player 1");
    const [ playerName2, setPlayerName2 ] = useState("Player 2");
    const [ gridSize, setGridSize]  = useState(10);
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" render={() => <Home {
            ...{timeLimit, setTimeLimit, playerName1, setPlayerName1, playerName2, setPlayerName2, gridSize, setGridSize}
          } />} exact />

          <Route path="/game" render={() => <Game {...{timeLimit, setTimeLimit, playerName1, setPlayerName1, playerName2, setPlayerName2, gridSize, setGridSize}}/>} />
          
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    );
}

export default App;

import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './components/Home';
import Error from './components/Error'
import Game from './components/Game';
import {winnerState} from './shared/constants';
import {createEmptyGrid} from './shared/state';

const createStore = () => {
  const [ timeLimit, setTimeLimit ] = useState(Infinity);

  const [ playerName1, setPlayerName1 ] = useState("Player 1");
  const [ playerName2, setPlayerName2 ] = useState("Player 2");
  const [ gridSize, setGridSize]  = useState(10);
  const [ winner, setWinner] = useState(winnerState.ONGOING);
  const [ grid, setGrid] = useState(createEmptyGrid(gridSize));
  const [ score1, setScore1 ] = useState(0);
  const [ score2, setScore2 ] = useState(0);
  const [ playerTurn, setPlayerTurn ] = useState(true);

  const store = {
    state: {
      timeLimit,
      playerName1,
      playerName2,
      gridSize,
      winner,
      grid,
      score1,
      score2,
      playerTurn
    },
    actions: {
      setTimeLimit,
      setPlayerName1,
      setPlayerName2,
      setGridSize: (value) => {
        setGridSize(Number(value));
        setGrid(createEmptyGrid(Number(value)));
      },
      setWinner,
      setGrid,
      setScore1,
      setScore2,
      incrementScore1: () => setScore1(score1 + 1),
      incrementScore2: () => setScore2(score2 + 1),
      setPlayerTurn,
    }
  };
  console.log(store);
  return store;
};

const App = () => {
    const store = createStore();
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" render={() => <Home store={store} />} exact />

          <Route path="/game" render={() => <Game store={store} />} />
          
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    );
}

export default App;

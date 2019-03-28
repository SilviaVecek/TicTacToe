import React from 'react';
import './styles.scss';
import { NavLink} from "react-router-dom";
import Header from '../Header';
import Time from '../Time';
import Players from '../Players';
import Board from '../Board';
import {restartGame} from '../../shared/state';

const Game = ({ timeLimit, setTimeLimit, playerName1, playerName2, gridSize, setGrid, setPlayerName1, setPlayerName2 }) => {

    return (
        <div className="game">
            <Header />
            {timeLimit === "Infinity" ? 
            <div className="time time__unlimited">UNLIMITED TIME</div> : 
            <div className="time time__limited">
                <div className="time__left">TIME LEFT:</div>
                <Time timeLimit={timeLimit} setTimeLimit = {setTimeLimit}/>
            </div>
            }
            <Players playerName1={playerName1} playerName2={playerName2}/>
            <Board gridSize={gridSize} />
            <NavLink className="play-again" to="/game" onClick={restartGame(gridSize, setGrid, playerName1, setPlayerName1, playerName2, setPlayerName2)}>Play Again? 
            <img className="play-again play-again--rewind" src="/images/Rewinds.svg"/>
            </NavLink>
            <NavLink className="restart-game" to="/">Restart Game</NavLink>
        </div>
    );

}

export default Game;
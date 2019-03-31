import React, {useState} from 'react';
import './styles.scss';
import { NavLink} from "react-router-dom";
import Header from '../Header';
import Time from '../Time';
import Players from '../Players';
import Board from '../Board';
import {playAgain} from '../../shared/state';

const Game = ({ timeLimit, setTimeLimit, playerName1, playerName2, gridSize, setGridSize, setPlayerName1, setPlayerName2}) => {
    
    const [score1, setScore1] = useState(0)
    const [score2, setScore2] = useState(0)

    return (
        <div className="game">
            <Header />
            {timeLimit === Infinity ? 
            <div className="time time__unlimited">UNLIMITED TIME</div> : 
            <div className="time time__limited">
                <div className="time__left">TIME LEFT:</div>
                <Time timeLimit={timeLimit} setTimeLimit = {setTimeLimit}/>
            </div>
            }
            <Players playerName1={playerName1} playerName2={playerName2} score1={score1} score2={score2}/>
            <Board gridSize={gridSize} score1 ={score1} setScore1={setScore1} score2={score2} setScore2={setScore2}/>
            <NavLink className="play-again" to="/game" onClick={playAgain(gridSize, setGridSize)}>Play Again? 
            <img className="play-again play-again--rewind" alt="rewind button"src="/images/Rewinds.svg"/>
            </NavLink>
            <NavLink className="restart-game" to="/">Restart Game</NavLink>
        </div>
    );

}

export default Game;
import React, {useState} from 'react';
import './styles.scss';
import { NavLink} from "react-router-dom";
import Header from '../Header';
import Time from '../Time';
import Players from '../Players';
import Board from '../Board';
import {playAgain, restartGame} from '../../shared/state';
import {winnerState} from '../../shared/constants'

const Game = ({ store }) => {
    const { state, actions } = store;
    const { timeLimit, playerName1, playerName2, score1, score2, gridSize, playerTurn, winner} = state;
    const { setWinner, setTimeLimit, setGrid, setScore1, setScore2, setPlayerName1, setPlayerName2, setPlayerTurn} = actions;



    return (
        <div className="game">
            <Header />
            {timeLimit === Infinity ? 
            <div className="time time__unlimited">UNLIMITED TIME</div> : 
            <div className="time time__limited">
                <div className="time__left">TIME LEFT:</div>
                <Time timeLimit={timeLimit} setTimeLimit={setTimeLimit} playerTurn={playerTurn} setPlayerTurn={setPlayerTurn} winner={winner} />
            </div>
            }
            <Players playerName1={playerName1} playerName2={playerName2} score1={score1} score2={score2}/>
            {winner === winnerState.ONGOING && <div className="player__turn">{playerTurn ? playerName1 + "'s Turn": playerName2 + "'s Turn"}</div>}
            <Board state={state} actions={actions} />
            <div className="end-game">
                <NavLink className="end-game__button play-again" to="/game" onClick={playAgain(gridSize, setGrid, setWinner)}>Play Again? 
                {/* <img className="play-again play-again--rewind" alt="rewind button"src="/images/Rewinds.svg"/> */}
                </NavLink>
                <NavLink className="end-game__button restart-game" to="/" onClick={restartGame(gridSize, setGrid, setWinner, setScore1, setScore2, setPlayerName1, setPlayerName2)}>Restart Game</NavLink>
            </div>
        </div>
    );

}

export default Game;
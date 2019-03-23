import React from 'react';
import './styles.scss';
import { NavLink} from "react-router-dom";
import Header from '../Header';
import Time from '../Time';

const Game = ({timelimit}) => {
    return (
        <div className="game">
            <Header />
            <div class="time">time left {timelimit}</div>
            <Time />
            <NavLink className="play-again" to="/">Play Again?
            <img className="play-again play-again--rewind" src="/images/Rewinds.svg"/>
            </NavLink>
        </div>
    );

}

export default Game;
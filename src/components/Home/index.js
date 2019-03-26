import React, { Component } from 'react';
import { NavLink} from "react-router-dom";
import Header from '../Header';
import './styles.scss';
import {SelectTime} from '../Time';
import {GridSelect} from '../Board';
import {PlayerNames} from '../Players'

const Home = ({ timeLimit, setTimeLimit, playerName1, setPlayerName1, playerName2, setPlayerName2, gridSize, setGridSize }) => {
    return ( 
        <div class="home">
            <Header />
            <h1 className="title">First to Five in a Row Wins!</h1>
            <div className="config">
                <form className="config__form">
                    <SelectTime onChange={setTimeLimit} value={timeLimit} />
                    <GridSelect onChange={setGridSize} value={gridSize}/>
                    <PlayerNames onChange={setPlayerName1} value={playerName1} placeholder="Player 1"/>
                    <PlayerNames onChange={setPlayerName2} value={playerName2} placeholder="Player 2"/>
                </form>
                <NavLink className="start" to="/game" type="submit" value="Submit">Start</NavLink>
            </div>
        </div>
    );

}

export default Home;
import React from 'react';
import { NavLink} from "react-router-dom";
import Header from '../Header';
import './styles.scss';
import {SelectTime} from '../Time';
import {GridSelect} from '../Board';
import {PlayerNames} from '../Players'

const Home = ({ store }) => {
    const { state: {
        timeLimit,
        gridSize,
        playerName1,
        playerName2
    }, actions: {
        setTimeLimit,
        setGridSize,
        setPlayerName1,
        setPlayerName2
    } } = store;
    return ( 
        <div className="home">
            <Header />
            <h1 className="title">First to Five in a Row Wins!</h1>
            <div className="config">
                <form className="config__form">
                    <div className="config__select">
                        <SelectTime onChange={setTimeLimit} value={timeLimit} />
                        <div className="config__text ">Seconds Per Turn</div>
                    </div>
                    <div className="config__select">
                        <GridSelect onChange={setGridSize} value={gridSize}/>
                        <div className="config__text ">Grid Size</div>
                    </div>
                    <div className="config__players">
                        <PlayerNames onChange={setPlayerName1} value={playerName1} placeholder="Player 1"/>
                        <PlayerNames onChange={setPlayerName2} value={playerName2} placeholder="Player 2"/>
                    </div>
                </form>
                <NavLink className="start" to="/game" type="submit" value="Submit">Start</NavLink>
            </div>
        </div>
    );

}

export default Home;
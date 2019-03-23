import React, { Component } from 'react';
import { NavLink} from "react-router-dom";
import Header from '../Header';
import './styles.scss';
import {SelectTime} from '../Time';
import {Grid} from '../Board';
import {PlayerNames} from '../Players'

const Home = () => {
    return ( 
        <div class="home">
            <Header />
            <h1 className="title">First to Five in a Row Wins!</h1>
            <div className="options">
                <SelectTime />
                <Grid />
                <PlayerNames />
                <NavLink className="start" to="/game">Start</NavLink>
            </div>
        </div>
    );

}

export default Home;
import React, { Component } from 'react';
import { NavLink} from "react-router-dom";
import Header from '../Header';
import './styles.scss';
import {SelectTime} from '../Time';
import {Grid} from '../Board';
import {PlayerNames} from '../Players'

const Home = ({ timelimit, setTimelimit}) => {
    return ( 
        <div class="home">
            <Header />
            <h1 className="title">First to Five in a Row Wins! {timelimit}</h1>
            <div>
                <form className="options" >
                    <SelectTime onChange={setTimelimit} value={timelimit} />
                    <Grid />
                    <PlayerNames />
                </form>
                <NavLink className="start" to="/game" type="submit" value="Submit">Start</NavLink>
            </div>
        </div>
    );

}

export default Home;
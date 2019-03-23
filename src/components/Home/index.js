import React, { Component } from 'react';
import { NavLink} from "react-router-dom";
import Header from '../Header';
import './styles.scss';

const Home = () => {
    return ( 
        <div class="home">
            <Header />
            <h1 className="title">First to Five in a Row Wins!</h1>
            <NavLink className="start" to="/game">Start</NavLink>
        </div>
    );

}

export default Home;
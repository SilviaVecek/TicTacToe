import React, { Component } from 'react';
import './styles.scss';

export const SelectTime = () => (
    <select className="time-selection">
        <option value="Infinity" selected>Unlimited</option>
        <option value="1 Minutes">1 Minutes</option>
        <option value="2 Minutes">2 Minutes</option>
        <option value="5 Minutes">5 Minutes</option>
        <option value="10 Minutes">10 Minutes</option> 
    </select>
)


const Time = () => {
    return(
        <div>

        </div>
    );
}

export default Time
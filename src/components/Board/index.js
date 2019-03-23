import React, { Component } from 'react';
import './styles.scss';

export const Grid = () => (
    <select className="grid">
        <option value="" disabled selected>Select Grid Size</option>
        <option value="10" >10 x 10</option>
        <option value="15">15 x 15</option>
        <option value="20">20 x 20</option>
    </select>

)


const Time = () => {
    return(
        <div>

        </div>
    );
}

export default Time
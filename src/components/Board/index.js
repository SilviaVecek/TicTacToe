import React from 'react';
import './styles.scss';



export const GridSelect = ({ onChange, value }) => (
    <select className="grid" onChange={(e) => onChange(e.target.value)} value={value}>
        <option value="" disabled selected>Select Grid Size</option>
        <option value="10" >10 x 10 Grid</option>
        <option value="15">15 x 15 Grid</option>
        <option value="20">20 x 20 Grid</option>
    </select>

)

const Grid = () => (
    <td>Z</td>
);




const Board = ({ grid, gridSize }) => {
    // return(

    // );
}

export default Board
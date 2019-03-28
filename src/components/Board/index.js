import React, {useState} from 'react';
import './styles.scss';
import classnames from 'classnames';
import {createEmptyGrid, handleClick} from '../../shared/state';
import {gridState} from '../../shared/constants';


export const GridSelect = ({ onChange, value }) => (
    <select className="grid" onChange={(e) => onChange(e.target.value)} value={value}>
        <option value="10" >10 x 10 Grid</option>
        <option value="15">15 x 15 Grid</option>
        <option value="20">20 x 20 Grid</option>
    </select>
)


const Cell = ({ state, onClick }) => (
    <td className={classnames("cell", state.toLowerCase())} onClick={onClick}
    ></td>
)

const getCells = (grid, index) => grid.filter(a => a.y === index);

const Board = ({ gridSize }) => {

    const [grid, setGrid] = useState(createEmptyGrid(gridSize));
    const [playerTurn, setPlayerTurn] = useState(true);
    const rowsIndexes = Array(Number(gridSize)).fill(0).map((e,i) => e+i);

    return (
        <table> 
            <tbody>
                {rowsIndexes.map(i => 
                    <tr className="row" key={i}>
                        {getCells(grid, i).map(a => <Cell key={`${a.x}${a.y}`} state={a.state} onClick={handleClick(grid, setGrid, a.x, a.y, a.state, setPlayerTurn, playerTurn)}/>)}
                    </tr>
                )}
            </tbody>
        </table>
    );
}

export default Board
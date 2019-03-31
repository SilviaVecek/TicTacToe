import React from 'react';
import './styles.scss';
import classnames from 'classnames';
import {handleClick} from '../../shared/state';


export const GridSelect = ({ onChange, value }) => (
    <select className="grid" onChange={(e) => onChange(e.target.value)} value={value}>
        <option value="10" >10 x 10 Grid</option>
        <option value="15">15 x 15 Grid</option>
        <option value="20">20 x 20 Grid</option>
    </select>
)


const Cell = ({ state, actions, cell }) => (
    <td className={classnames("cell", cell.state.toLowerCase())} onClick={handleClick(state, actions, cell)}
    ></td>
)

const getCells = (grid, index) => grid.filter(a => a.y === index);

const Board = ({ state, actions }) => {
    const rowsIndexes = Array(Number(state.gridSize)).fill(0).map((e,i) => e+i);
    return (
        <table className="board"> 
            <tbody>
                {rowsIndexes.map(i => 
                    <tr className="row" key={i}>
                        {getCells(state.grid, i).map(cell => <Cell key={`${cell.x}${cell.y}`} state={state} actions={actions} cell={cell} />)}
                    </tr>
                )}
            </tbody>
        </table>
    );
}

export default Board
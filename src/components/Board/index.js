import React from 'react';
import './styles.scss';
import classnames from 'classnames';
import {handleClick} from '../../shared/state';
import {winnerState} from '../../shared/constants';


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
        <>
        {(state.winner === winnerState.TIE) && <div className="win_message win_message_tie">It was a Tie</div>}
        {(state.winner === winnerState.PLAYER1) && <div className="win_message win_message_player1">{state.playerName1} wins</div>}
        {(state.winner === winnerState.PLAYER2) && <div className="win_message win_message_player2">{state.playerName2} wins</div>}
        <table className="board"> 
            <tbody>
                {rowsIndexes.map(i => 
                    <tr className="row" key={i}>
                        {getCells(state.grid, i).map(cell => <Cell key={`${cell.x}${cell.y}`} state={state} actions={actions} cell={cell} />)}
                    </tr>
                )}
            </tbody>
        </table>
        </>
    );
}

export default Board
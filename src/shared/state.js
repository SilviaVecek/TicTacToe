import {gridState} from './constants';

export function createEmptyGrid(value) {
    let singlegrid = []
    for (let i = 0; i < value; i ++) {
        for (let j=0; j < value; j++) {
            singlegrid.push({
                x: i,
                y: j,
                state: gridState.EMPTY
            })
        };
    };
    return singlegrid;
  }


export const handleClick = (grid, setGrid, x, y, state, setPlayerTurn, playerTurn) => () => {
    const markGridCross = grid.map(a => {
        return (`${a.x}${a.y}` === `${x}${y}`) ? {...grid[0], state: gridState.CROSS} : grid;
    });

    // setGrid(markGridCross)
    console.log(`${x}${y}`)
    if(state === gridState.CROSS || state === gridState.NAUGHT) {
        return;
    }
    // const markGridNaught = grid.map(a => {
    //     return (a.x === x && a.y === y && a.state === gridState.EMPTY) ? {...grid, state: gridState.NAUGHT} : grid;
    // });

    // if (playerTurn === true) {
    //     setGrid(markGridCross);
    // } else {
    //     setGrid(markGridNaught);
    // }

}


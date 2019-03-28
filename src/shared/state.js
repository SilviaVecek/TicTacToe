import {gridState, winnerState} from './constants';
import React, {useState} from 'react';

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

function find5inRow(arr, num) {
    for (let i=0; i<arr.length; i++) {
        let count = 1;
        for (let j=1; j<5; j++) {
            if (arr.includes(arr[i]+(num*j))) {
                count ++
            } else {
                count = 1;
            }
            if(count === 5) {
                return true
            }
        }
    }
    return false
}

function whoWins(arr1, arr2, gridLength) {
    if (arr1.length < 5) {
        return winnerState.ONGOING;
    }
    let sortedCross = arr1.sort((a,b) => a-b);
    let sortedNaught = arr2.sort((a,b) => a-b);
    
    let checkDiff = [1,9,10,11];
    for (let i = 0; i < checkDiff.length; i ++) {
        if (find5inRow(sortedCross, checkDiff[i])) {
            return setTimeout(alert, 300, winnerState.PLAYER1)
        } else if (find5inRow(sortedNaught, checkDiff[i])) {
            return setTimeout(alert, 300, winnerState.PLAYER2)
        }
    }
    if (arr2.length === gridLength) {
        return setTimeout(alert, 300, winnerState.TIE);
    }
    return winnerState.ONGOING;
}



export const handleClick = (grid, setGrid, x, y, state, setPlayerTurn, playerTurn, winner, setWinner) => () => {
    if(state === gridState.CROSS || state === gridState.NAUGHT) {
        return;
    }

    console.log(winner)
    console.log(winnerState.ONGOING)
    console.log(playerTurn)
    console.log(grid)

    if (winner === winnerState.ONGOING) {
        setWinner(winner);
    } else {
        return;
    };

    const markGrid = grid.map(a => {
        return (`${a.x}${a.y}` === `${x}${y}`) ? {...a, state: playerTurn ? gridState.CROSS : gridState.NAUGHT} : a;
    });

    setPlayerTurn(!playerTurn);
    setGrid(markGrid);

    const findXY = (state) => markGrid.filter(cell => cell.state === state).map(cell => Number(`${cell.x}${cell.y}`));
    const NaughtXY = findXY(gridState.NAUGHT);
    const CrossXY = findXY(gridState.CROSS);
    const winner = whoWins(CrossXY, NaughtXY, Math.sqrt(grid.length));

    
}

export const restartGame = (gridSize, setGrid) => () => {
    setGrid(createEmptyGrid(gridSize))
}
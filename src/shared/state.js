import {gridState} from './constants';
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

function whoWins(arr1, arr2) {
    if (arr1.length < 5) {
        return;
    }
    let sortedCross = arr1.sort((a,b) => a-b);

    let sortedNaught = arr2.sort((a,b) => a-b);

    let checkDiff = [1,9,10,11];

    for (let i = 0; i < checkDiff.length; i ++) {
        if (find5inRow(sortedCross, checkDiff[i]) === true) {
            return alert("Crosses Wins")
        } else if (find5inRow(sortedNaught, checkDiff[i]) === true) {
            return alert("Naughts Wins")
        }
    }
    return 
}

const NaughtXY = []
const CrossXY =[]

export const handleClick = (grid, setGrid, x, y, state, setPlayerTurn, playerTurn) => () => {
    if(state === gridState.CROSS || state === gridState.NAUGHT) {
        return;
    }
    if(playerTurn) {
        NaughtXY.push(Number(`${x}${y}`));
    } else {
        CrossXY.push(Number(`${x}${y}`));
    }
    console.log(NaughtXY);
    console.log(CrossXY);

    const markGrid = grid.map(a => {
        return (`${a.x}${a.y}` === `${x}${y}`) ? {...a, state: playerTurn ? gridState.CROSS : gridState.NAUGHT} : a;
    });

    setPlayerTurn(!playerTurn);
    setGrid(markGrid);
    
    whoWins(CrossXY, NaughtXY);
}

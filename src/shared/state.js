import {gridState, winnerState} from './constants';


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


export function whoWins(arr1, arr2, gridLength) {
    if (arr1.length < 5) {
        return winnerState.ONGOING;
    }
    let sortedCross = arr1.sort((a,b) => a-b);
    let sortedNaught = arr2.sort((a,b) => a-b);

    let checkDiff = [1,9,10,11];
    for (let i = 0; i < checkDiff.length; i ++) {
        if (find5inRow(sortedCross, checkDiff[i])) {
            return winnerState.PLAYER1;
        } else if (find5inRow(sortedNaught, checkDiff[i])) {
            return winnerState.PLAYER2;
        }
    }
    if (arr2.length === gridLength) {
        return winnerState.TIE;
    }
    return winnerState.ONGOING;
}



export const handleClick = (grid, setGrid, x, y, state, setPlayerTurn, playerTurn, winner, setWinner, score1, setScore1, score2, setScore2) => () => {
    if(state === gridState.CROSS || state === gridState.NAUGHT) {
        return;
    }
    if (winner !== winnerState.ONGOING) {
        return;
    }
    const markGrid = grid.map(a => {
        return (`${a.x}${a.y}` === `${x}${y}`) ? {...a, state: playerTurn ? gridState.CROSS : gridState.NAUGHT} : a;
    });

    setPlayerTurn(!playerTurn);
    setGrid(markGrid);
    
    const findXY = (state) => markGrid.filter(cell => cell.state === state).map(cell => Number(`${cell.x}${cell.y}`));
    const NaughtXY = findXY(gridState.NAUGHT);
    const CrossXY = findXY(gridState.CROSS);
    
    if (winner === winnerState.ONGOING) {
        const winner = whoWins(CrossXY, NaughtXY, grid.length/2);
        setWinner(winner)
        if (winner !== winnerState.ONGOING) {
            setTimeout(alert, 300, winner);
            if(winner === winnerState.PLAYER1) {
                setScore1(score1 + 1);
            }
            if(winner === winnerState.PLAYER2) {
                setScore2(score2 + 1)
            }
        }
    }
}

export const playAgain = (gridSize, setGrid, setWinner) => () => {
    setGrid(createEmptyGrid(gridSize))
    setWinner(winnerState.ONGOING)
}


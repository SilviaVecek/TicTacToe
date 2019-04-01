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
    if (arr1.length < 4) {
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



export const handleClick = (state, actions, cell) => () => {
    const { winner, grid, playerTurn } = state;
    const { setPlayerTurn, setGrid, setWinner, incrementScore1, incrementScore2 } = actions;
    const { x, y, state: cellState } = cell;
    if (cellState === gridState.CROSS || cellState === gridState.NAUGHT) {
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
    console.log(NaughtXY)
    console.log("O first")
    console.log(CrossXY)
    if (winner === winnerState.ONGOING) {
        const winner = whoWins(CrossXY, NaughtXY, grid.length/2);
        setWinner(winner)
        console.log(winner)
        if (winner !== winnerState.ONGOING) {
            if(winner === winnerState.PLAYER1) {
                incrementScore1();
            } 
            if(winner === winnerState.PLAYER2) {
                incrementScore2();
            }
        }
    }
}


export const playAgain = (gridSize, setGrid, setWinner
) => (e) => {
    setGrid(createEmptyGrid(gridSize)); 
    setWinner(winnerState.ONGOING);
    e.preventDefault();
}


export const restartGame = (gridSize, setGrid, setWinner, setScore1, setScore2, setPlayerName1, setPlayerName2, setGridSize, setTimeLimit) => (e) => {
    setScore1(0)
    setScore2(0)
    setGrid(createEmptyGrid(gridSize)); 
    setWinner(winnerState.ONGOING);
    setPlayerName1("Player 1")
    setPlayerName2("Player 2")
    setGridSize(10)
    setTimeLimit(Infinity)
}


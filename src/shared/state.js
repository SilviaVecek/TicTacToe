import gridState from 'constants';

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
  
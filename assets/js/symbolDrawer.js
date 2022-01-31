'use strict'

function symbolSquareDrawer(size, symbol) {
    let res = '';

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            
            if(i === 0 || i === (size-1) || j ===0 || j === (size-1) || i === j) {
                res += symbol;
            } else {
                res += ' ';
            }
            
        }
        res += '\n';   
    }
    return res;
}

console.log(symbolSquareDrawer(10, '*'));
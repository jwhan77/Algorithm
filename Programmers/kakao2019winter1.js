function solution(board, moves) {
    let answer = 0;
    let resultBoard = [];
    moves.map(move => {
        for(let i=0; i<board.length; i++) {
            if(board[i][move-1] !== 0) {
                resultBoard.push(board[i][move-1]);
                board[i][move-1] = 0;
                if (resultBoard.length >= 2) {
                    if (resultBoard[resultBoard.length-1] === resultBoard[resultBoard.length-2]) {
                        answer += 2;
                        resultBoard.splice(resultBoard.length-2, 2);
                    }
                }
                break;
            }
        }
    })
    return answer;
}

board = [[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]];
moves = [1,5,3,5,1,2,1,4];
let result = solution(board, moves);
console.log(result);
// 프로그래머스 연습문제 가장 큰 정사각형 찾기
function solution(board) {
    let max = 0;

    if (board.length < 2 || board[0].length < 1) {
        for (let i=0; i<board.length; i++) {
            for (let j=0; j<board[0].length; j++) {
                if (board[i][j] === 1) max = 1;
            }
        }
        return max;
    }

    for(let i=1; i<board.length; i++) {
        for(let j=1; j<board[0].length; j++) {
            if (board[i][j] === 1) {
                board[i][j] = Math.min(board[i-1][j-1], board[i-1][j], board[i][j-1]) + 1;

                if (board[i][j] > max) max = board[i][j];
            }
        }
    }

    return max**2;
}
// 프로그래머스 완전탐색 카펫
function solution(brown, yellow) {
    let divisors = [];
    for(let i=1; i<=Math.floor(Math.sqrt(yellow)); i++) {
        if (yellow % i === 0) divisors.push([i, yellow/i]);
    }
    for(let i=0; i<divisors.length; i++) {
        let exp_brown = (divisors[i][0] + divisors[i][1]) * 2 + 4;
        if (exp_brown === brown) return divisors[i][0] > divisors[i][1] ? [divisors[i][0]+2, divisors[i][1]+2] : [divisors[i][1]+2, divisors[i][0]+2];
    }
}
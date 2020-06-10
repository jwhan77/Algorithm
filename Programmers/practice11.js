// 프로그래머스 연습문제 두 정수 사이의 합
function solution(a, b) {
    let [small, big] = a < b ? [a,b] : [b,a];
    let sum = 0;
    for(let i=small; i<=big; i++) {
        sum += i;
    }
    return sum;
}
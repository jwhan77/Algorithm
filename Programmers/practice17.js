// 프로그래머스 연습문제 나누어 떨어지는 숫자 배열
function solution(arr, divisor) {
    arr = arr.filter(a => a % divisor === 0);
    return arr.length === 0 ? [-1] : arr.sort((a,b) => a-b);
}
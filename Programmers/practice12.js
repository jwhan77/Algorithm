// 프로그래머스 연습문제 같은 숫자는 싫어
function solution(arr) {
    let answer = [arr[0]];
    for(let i=1; i<arr.length; i++) {
        if (arr[i] !== arr[i-1]) answer.push(arr[i]);
    }
    return answer;
}
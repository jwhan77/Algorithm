// 프로그래머스 연습문제 숫자의 표현
function solution(n) {
    let answer = 1;
    for(let i=1; i<=Math.floor(n/2); i++) {
        let sum = i;
        let j = i+1;
        while (sum <= n) {
            sum += j++;
            if (sum === n) answer++;
        }
    }
    return answer;
}
// 프로그래머스 연습문제 약수의 합
function solution(n) {
    let answer = 0;
    for(let i=1; i<=n; i++) {
        if (n % i === 0) answer += i;
    }
    return answer;
}
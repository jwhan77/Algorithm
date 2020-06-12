// 프로그래머스 연습문제 수박수박수박수박수박수?
function solution(n) {
    let answer = '';
    for (let i=1; i<=n; i++) {
        if(i%2 === 1) answer += '수';
        else answer += '박';
    }
    return answer;
}
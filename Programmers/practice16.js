// 프로그래머스 연습문제 문자열 내 p와 y의 개수
function solution(s){
    let [countP, countY] = [0, 0];
    s = s.toUpperCase();
    for(let i=0; i<s.length; i++) {
        if (s.substring(i, i+1) === "P") countP++;
        else if (s.substring(i, i+1) === "Y") countY++;
    }
    return countP === countY;
}
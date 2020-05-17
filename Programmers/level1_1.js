// 프로그래머스 연습문제 가운데 글자 가져오기
function solution(s) {
    let c = Math.floor(s.length / 2);
    if (s.length % 2 === 1) {
        return s[c];
    } else {
        return s.substring(c-1,c+1);
    }
}
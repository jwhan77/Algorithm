// 프로그래머스 연습문제 다음 큰 숫자
function solution(n) {
    let count_one = (n.toString(2).match(/1/g) || []).length;
    while(true) {
        n++;
        let compared_count_one = (n.toString(2).match(/1/g) || []).length;
        if (compared_count_one === count_one) return n;
    }
}
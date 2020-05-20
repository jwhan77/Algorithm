function solution(n) {
    let answer='';
    while (n > 0) {
        answer = (n % 3 === 0 ? "4" : (n%3).toString()) + answer;
        n = n % 3 === 0 ? n/3-1 : Math.floor(n/3);
    }
    return answer;
}
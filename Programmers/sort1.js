// 정렬 - 가장 큰 수
function solution(numbers) {
    let answer = numbers.map(number => number = number.toString())
        .sort((a, b) => (b+a) - (a+b))
        .join('');
    if(answer[0] === "0") return "0";
    return answer;
}
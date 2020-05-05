// 프로그래머스 스택/큐 탑
function solution(heights) {
    let answer = [];
    for(let heightsLength = heights.length, i=heightsLength-1; i>0; i--) {
        for(let j=i-1; j>=0; j--) {
            if(heights[j] > heights[i]) {
                answer.unshift(j+1);
                break;
            } else if (j === 0) {
                answer.unshift(0);
            }
        }
    }
    answer.unshift(0);
    return answer;
}
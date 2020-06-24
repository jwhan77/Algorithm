// 프로그래머스 이분탐색 예산
function solution(budgets, M) {
    budgets = budgets.sort((a,b) => a-b);
    let sum = budgets.reduce((a,b) => a+b, 0);
    if(sum <= M) return budgets[budgets.length-1];

    let left = 0;
    let right = budgets[budgets.length-1];
    let answer = 0;

    while (left <= right) {
        let mid = Math.ceil((left+right)/2);
        sum = 0;
        budgets.map( b => {
            if ( b < mid ) sum += b;
            else sum += mid;
        });
        if (sum <= M) {
            left = mid+1;
            answer = mid;
        } else {
            right = mid-1;
        }
    }
    return answer;
}
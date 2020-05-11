// 탐욕법(Greedy) - 체육복
function solution(n, lost, reserve) {
    lost = lost.sort();
    reserve = reserve.sort();
    let answer = n - lost.length;
    for (let i=0; i<lost.length; i++) {
        if (reserve.indexOf(lost[i]) !== -1) {
            reserve.splice(reserve.indexOf(lost[i]), 1);
            answer++;
        } else if (reserve.indexOf(lost[i]+1) !== -1 && lost.indexOf(lost[i]+1) === -1) {
            reserve.splice(reserve.indexOf(lost[i]+1), 1);
            answer++;
        } else if (reserve.indexOf(lost[i]-1) !== -1 && lost.indexOf(lost[i]-1) === -1) {
            reserve.splice(reserve.indexOf(lost[i]-1), 1);
            answer++;
        }
    }
    
    return answer;
}
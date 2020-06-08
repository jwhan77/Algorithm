// 프로그래머스 연습문제 행렬의 곱셈
function solution(arr1, arr2) {
    let answer = [];
    for(let i=0; i<arr1.length; i++) {
        let tmp = [];
        for(let j=0; j<arr2[0].length; j++) {
            let s = 0;
            for (let k=0; k<arr2.length; k++) {
                s += arr1[i][k] * arr2[k][j];
            }
            tmp.push(s);
        }
        answer.push(tmp);
    }
    return answer;
}
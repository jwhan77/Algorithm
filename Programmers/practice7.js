// 프로그래머스 연습문제 N개의 최소공배수
function solution(arr) {
    let lcm = Math.max(...arr);
    let i = 1;
    while(true) {
        let answer = true;
        for(let j=0; j<arr.length; j++) {
            if ( (lcm * i) % arr[j] !== 0) {
                answer = false;
                break;
            }
        }
        if(answer) return lcm * i;
        i++;
    }
}
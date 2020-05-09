// 스택/큐 - 기능개발
function solution(progresses, speeds) {
    let answer = [];
    while(progresses.length > 0) {
        if(progresses[0] >= 100) {
            let r = 0;
            while(progresses[0] >= 100) {
                progresses.shift();
                speeds.shift();
                r++;
            }
            answer.push(r);
        } else {
            for(let i=0; i<progresses.length; i++) {
                progresses[i] += speeds[i];
            }
        }
    }
    return answer;
}
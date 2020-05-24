function solution(arrangement) {
    let answer = 0;
    let s = [];
    arrangement.split("").map( (a, i) => {
        if(a === "(") {
            if (arrangement[i+1] === ")") {
                answer += s.length;
            } else {
                s.push(i);
            }
        } else {
            if (arrangement[i-1] !== "(") {
                s.pop();
                answer += 1;
            }
        }
    });
    return answer;
}
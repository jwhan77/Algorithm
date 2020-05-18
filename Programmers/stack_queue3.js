// 프로그래머스 스택/큐 프린터
function solution(priorities, location) {
    let a = priorities.reduce((prev, p, i) => {
        prev.push([p, i]);
        return prev;
    }, []);

    let answer = [];
    while (a.length > 0) {
        let first = a[0];
        let print = true;
        for (let i=1; i<a.length; i++) {
            if(a[i][0] > first[0]) {
                a.shift();
                a.push(first);
                print = false;
                break;
            }
        }
        if (print) {
            answer.push(a[0][1]);
            a.shift();
        }
    }

    return answer.indexOf(location) + 1;
}
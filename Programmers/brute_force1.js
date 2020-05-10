// 완전탐색 - 모의고사
function solution(answers) {
    let p1 = [],  p2 = [], p3 = [];
    answers.map((answer, i) => {
        switch(i%5) {
            case 0:
                p1.push(answer - 1);
                break;
            case 1:
                p1.push(answer - 2);
                break;
            case 2:
                p1.push(answer - 3);
                break;
            case 3:
                p1.push(answer - 4);
                break;
            case 4:
                p1.push(answer - 5);
                break;
        }

        switch(i%8) {
            case 0:
            case 2:
            case 4:
            case 6:
                p2.push(answer - 2);
                break;
            case 1:
                p2.push(answer - 1);
                break;
            case 3:
                p2.push(answer - 3);
                break;
            case 5:
                p2.push(answer - 4);
                break;
            case 7:
                p2.push(answer - 5);
                break;
        }

        switch(i%10) {
            case 0:
            case 1:
                p3.push(answer - 3);
                break;
            case 2:
            case 3:
                p3.push(answer - 1);
                break;
            case 4:
            case 5:
                p3.push(answer - 2);
                break;
            case 6:
            case 7:
                p3.push(answer - 4);
                break;
            case 8:
            case 9:
                p3.push(answer - 5);
                break;
        }
    });

    p1 = p1.filter(a => a === 0);
    p2 = p2.filter(a => a === 0);
    p3 = p3.filter(a => a === 0);

    let p = [
        [1, p1.length],
        [2, p2.length],
        [3, p3.length]
    ];
    p.sort((a,b) => b[1] - a[1]);

    let answer = [];
    p.map(a => {
        if(a[1] === p[0][1]) {
            answer.push(a[0]);
        }
    });
    return answer;
}
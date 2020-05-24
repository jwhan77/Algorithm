function solution(s) {
    let answer = [];
    for(let i=1; i<=Math.floor(s.length/2); i++) {
        let a = "";
        let duplicated = s.substring(0,i);
        let num = 1;
        for(let j=i; j<=s.length; j=j+i) {
            if (s.substring(j, j+i) === duplicated) {
                num++;
            } else {
                if (num > 1) {
                    a += num.toString();
                }
                a += duplicated;
                duplicated = s.substring(j, j+i);
                num = 1;
            }

            if (j+i > s.length) {
                a += s.substring(j, s.length);
                break;
            }
        }
        answer.push(a.length);
    }
    return Math.floor(s.length/2)===0 ? s.length : Math.min(...answer);
}
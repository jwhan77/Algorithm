function solution(name) {
    let answer = 0;
    let cursor = name.length - 1;
    for(let i=0; i<name.length; i++) {
        let a = name.charCodeAt(i);
        if (a > 65 && a <= 78) {
            answer += a-65;
        } else if (a > 78 && a <= 90) {
            answer += 91-a;
        } else if (a === 65) {
            let nextIndex = i+1;
            let zeroNum = 0;
            while ( name.charCodeAt(nextIndex) === 65 && nextIndex < name.length ) {
                nextIndex++;
                zeroNum++;
            }
            let tmp = (i === 0 ? 0 : (i-1)*2) + (name.length - 1 - i - zeroNum);
            if( tmp < cursor ) cursor = tmp;
        }
    }
    answer += cursor;
    return answer;
}
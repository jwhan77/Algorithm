// 프로그래머스 Summer/Winter Coding(2019) 멀쩡한 사각형
function solution(w, h) {
    let s = w < h ? w: h;
    let gcd = 1;
    for (let i=1; i<=s; i++) {
        if (w % i === 0 && h % i === 0) {
            gcd = i;
        }
    }
    return (w * h) - (w + h - gcd);
}
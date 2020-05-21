function solution(s) {
    s = s.split(" ").map(v => +v).sort((a,b) => a-b);
    return `${s[0]} ${s[s.length-1]}`
}
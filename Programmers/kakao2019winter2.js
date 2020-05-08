function solution(s) {
    let list = [];
    s.replace(/{(\d+)(,(\d+))*}/g, (a) => {
        list.push(a.replace("{", "").replace("}", "").split(",").map(x=>+x));
    });
    list.sort((a,b) => a.length - b.length);

    let answer = [];
    list.map(l => answer.push(l.filter(n => !answer.includes(n))[0]));
    return answer;
}
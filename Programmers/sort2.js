// 정렬 - K번째수

function solution(array, commands) {
    return commands.reduce((l, c) => {
        l.push(array.slice(c[0]-1, c[1]).sort((a,b) => a-b)[c[2]-1]);
        return l;
    },[]);
}
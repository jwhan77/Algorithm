// 프로그래머스 DFS/BFS 네트워크
function solution(n, computers) {
    let adjList = new Map();
    for (let i=0; i<n; i++) {
        adjList.set(i, []);
    }

    for (let i=0; i<n; i++) {
        for (let j=i+1; j<n; j++) {
            if (computers[i][j] === 1) {
                adjList.get(i).push(j);
                adjList.get(j).push(i);
            }
        }
    }

    let visited = new Array(n).fill(false);
    let parent = new Array(n).fill(-1);

    function DFS(v) {
        visited[v] = true;
        adjList.get(v).map(c => {
            if(!visited[c]) {
                parent[c] = v;
                DFS(c);
            }
        });
    }

    visited.map( (v,i) => {
        if(!v) {
            DFS(i);
        }
    });

    return parent.filter(x => x === -1).length;
}
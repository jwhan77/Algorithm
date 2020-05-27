// 프로그래머스 Summer/Winter Coding(~2018) 스킬트리
function solution(skill, skill_trees) {
    let answer = 0;
    skill_trees.map( skill_tree => { // 스킬 트리 내부에서 loop
        let order = -1; // 반드시 첫번째 스킬부터 시작해야 그 다음 스킬을 시작할 수 있으므로 -1부터 시작한다
        let possible = true;
        for(let i=0; i<skill_tree.length; i++) {
            let n = skill.indexOf(skill_tree[i]); // 각 스킬트리에서 인덱스를 찾는다
            if (n === order+1) { // 스킬이 이전 순서 다음 숫자라면 순서에 맞게 스킬을 진행하고 있음
                order = n;
            } else if (n > order+1) { // 만약 스킬이 이전 순서보다 1단계 이상 건너뛴 경우 순서에 맞지 않음. 따라서 불가능.
                possible = false;
                break;
            }
        }
        if(possible) answer++; // 스킬 순서를 충족시켰거나, skill과 관련 없는 것들만 skill_tree에 있는 경우
    });
    return answer;
}
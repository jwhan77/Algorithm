// 프로그래머스 Summer/Winter Coding(~2018) 스킬트리
function solution(skill, skill_trees) {
    let answer = 0;
    skill_trees.map( skill_tree => {
        let order = -1;
        let possible = true;
        for(let i=0; i<skill_tree.length; i++) {
            let n = skill.indexOf(skill_tree[i]);
            if (n === order+1) {
                order = n;
            } else if (n > order+1) {
                possible = false;
                break;
            }
        }
        if(possible) answer++;
    });
    return answer;
}
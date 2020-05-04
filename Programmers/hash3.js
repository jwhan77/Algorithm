// 해시 - 위장
function solution(clothes) {
    clothes = clothes.sort((a,b) => a[1].localeCompare(b[1]));
    let indexList = [1];
    for (let index=0, listLength=clothes.length; index<listLength-1; index++) {
        if(clothes[index][1] !== clothes[index+1][1]) {
            indexList.push(1);
        } else {
            indexList[indexList.length-1]++;
        }
    }
    let answer = 1;
    for (let index=0, listLength=indexList.length; index<listLength; index++) {
        answer *= indexList[index] + 1;
    }
    answer = answer - 1;
    return answer;
}
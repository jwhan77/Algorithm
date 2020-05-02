// 해시 - 완주하지 못한 선수
function solution(participant, completion) {
    participant = participant.sort();
    completion = completion.sort();

    var answer = '';
    for (var i=0; i < participant.length; i++) {
        if (participant[i] !== completion[i]) {
            answer = participant[i];
            break;
        }
    }
    return answer;
}
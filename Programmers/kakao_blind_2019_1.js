// 2019 KAKAO BLIND RECRUITMENT 오픈채팅방
function solution(record) {
    let user_obj = {};

    record.map( r => {
        let [status, uid, name] = r.split(" ");
        if (status === "Enter" || status === "Change") user_obj[uid] = name;
    });

    let answer = [];

    record.map( r => {
        let [status, uid, _] = r.split(" ");
        if (status === "Enter") answer.push(`${user_obj[uid]}님이 들어왔습니다.`);
        else if (status === "Leave") answer.push(`${user_obj[uid]}님이 나갔습니다.`);
    });
    
    return answer;
}
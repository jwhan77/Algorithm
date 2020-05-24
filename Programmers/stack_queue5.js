// 프로그래머스 스택/큐 다리를 지나는 트럭
function solution(bridge_length, weight, truck_weights) {
    let answer = 1;
    let q = [];
    let c = [];
    let sum = 0;

    while(truck_weights.length > 0 || q.length > 0) {
        let current_truck = truck_weights[0];
        if (sum + current_truck <= weight) {
            q.push(bridge_length);
            truck_weights.shift();
            sum += current_truck;
            c.push(current_truck);
        }
        if (q[0] === 1) {
            q.shift();
            sum -= c.shift();
        }
        if (q.length > 0) {
            q.map( (t,i) => {
                q[i] = t-1;
            });
        }
        answer++;
    }
    return answer;
}
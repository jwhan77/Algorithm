// 2018 KAKAO BLIND RECRUITMENT [1차] 캐시
function solution(cacheSize, cities) {
    if (cacheSize === 0) return 5*cities.length;
    let cache = [];
    let answer = 0;
    cities.map( city => {
        city = city.toUpperCase();
        if (!cache.includes(city)) {
            answer += 5;
            if (cache.length === cacheSize) cache.shift();
            cache.push(city);
        } else {
            answer += 1;
            cache.splice(cache.indexOf(city), 1);
            cache.push(city);
        }
    });
    return answer;
}
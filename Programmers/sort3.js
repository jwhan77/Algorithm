function solution(citations) {
    citations.sort((a, b) => b-a);
    for(let i=0; i<citations.length; i++) {
        if ( citations[i] <= i ) return i;
    }
    if (citations[citations.length-1] >= citations.length) return citations.length;
}
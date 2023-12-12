function solution(arr, queries) {
    let answer = [];
    for (let q of queries) {
        // let slicedArr= arr.slice(q[0],q[1])
        let filArr = arr.slice(q[0],q[1]+1).filter(function(e){
            return e > q[2];
        })
        // answer.push(Math.min(...filArr) || -1)
         if (filArr.length === 0) {
            answer.push(-1);
        } else {
            answer.push(Math.min(...filArr));
        }
    }
    // return filArr;
    return answer ;
}
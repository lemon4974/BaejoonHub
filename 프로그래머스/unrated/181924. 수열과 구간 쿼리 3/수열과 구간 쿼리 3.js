function solution(arr, queries) {
    const swap = (arr, idx1, idx2) => {
        [arr[idx1],arr[idx2] ] = [arr[idx2],arr[idx1]]    
    }
    for(let query of queries) {
        swap(arr, query[0], query[1])
    }
    
    var answer = [];
    return arr;
}
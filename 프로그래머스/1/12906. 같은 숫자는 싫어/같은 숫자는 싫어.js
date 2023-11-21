function solution(arr)
{
    let removedArr = [];
    for(let i = 0 ; i < arr.length ; i++){
      if(removedArr[removedArr.length-1] !== arr[i]){
        removedArr.push(arr[i])
        }
    }
   
    let answer = removedArr;

    
    return answer;
}
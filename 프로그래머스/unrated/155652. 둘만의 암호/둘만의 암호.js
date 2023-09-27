function solution(s, skip, index) {
    let arr = "abcdefghijklmnopqrstuvwxyz".split("");
    let skipArr = skip.split("");
    let sArr = s.split("");
    
    let answerArr = [];
    let divide = 26 - skip.length;
    
    for(let i = 0 ; i < skip.length ; i++){
        let skipchar = skipArr[i];
        arr.splice(arr.indexOf(skipchar),1);    
        }
    
    for(let i = 0 ; i < s.length ; i++){
        let filteredindex = (arr.indexOf(sArr[i]));
        
       
        answerArr.push(arr[(filteredindex+index)%arr.length]);
            
        
    }
    

    let answer = answerArr.join('');
    return answer;
}
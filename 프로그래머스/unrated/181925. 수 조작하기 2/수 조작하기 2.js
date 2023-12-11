function solution(numLog) {
    let log = 0;
    let answerArr = [];
    for(let i = 0 ; i < numLog.length-1 ; i++ ){
        log = numLog[i + 1] - numLog[i];
        switch(log){
            case 1:
                answerArr.push('w');
                break;
            case -1:
                answerArr.push('s');
                break;
            case 10:
                answerArr.push('d');
                break;
            case -10:
                answerArr.push('a');
                break;
                
        }
    }
    
    
    var answer = answerArr.join('');
    return answer;
}
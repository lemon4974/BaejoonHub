function solution(n, control) {
    var answer = 0;
    
    for (let char of control){
        switch (char) {
        case 'w':
            n++;
            break;
        case 's':
            n--;
            break;
        case 'd':
            n += 10;
            break;
        case 'a':
            n -= 10;
            break;
        }
        // console.log(n);
    }
    return n;
}
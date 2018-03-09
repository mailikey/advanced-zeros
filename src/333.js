module.exports = function getZerosCount(number, base) {
    let i = 1;// степень сс
    let ZeroCount = 0;
    let AllZeroz = 0;
    let NOD = 0;
    for(let j = 1; j <= base; j++) {
        if(base % j === 0){
            if (j === base && NOD !== 1) break;
            NOD = j;
        }
    }
    while(i < 256){
        ZeroCount = number/Math.pow(NOD, i);// делим number на систему счисления в степени i
        i++;
        AllZeroz = Math.floor(ZeroCount + AllZeroz);
    }
    return AllZeroz;
};
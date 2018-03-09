module.exports = function getZerosCount(number, base) {
    let i = 1;// степень сс
    let ZeroCount = 0;
    let currentBiggest = 1;
    let AllZeroz = 0;
    let NOD = 0;
    for (let j = 1; j < base; j++) {
        if (base % j === 0) {
            currentBiggest = base / j;
            let i = 2;
            while (i < base) {
                if (currentBiggest % i === 0 && currentBiggest !== i) {
                    currentBiggest = currentBiggest / i;
                } else {
                    i++;
                }
            }
            if (NOD < currentBiggest) NOD = currentBiggest;
        }
    }
    if (NOD === 0) NOD = base;
    while (i < 256) {
        ZeroCount = number / Math.pow(NOD, i++);// делим number на систему счисления в степени i
        AllZeroz = Math.floor(ZeroCount + AllZeroz);
    }
    return AllZeroz;
};

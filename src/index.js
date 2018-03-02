module.exports = function getZerosCount(number, base) {
    let i = 1;// степень сс
    let ZeroCount = 0;
    let AllZeroz = 0;
    let NOD;
    for(let j = 1; j <= base; j++) {
        NOD = number % j === 0 ? j : NOD;
    }
    console.log(NOD);
    while(i < 256){
        ZeroCount = number/Math.pow(NOD, i);// делим number на систему счисления в степени i
        i++;
        AllZeroz = Math.floor(ZeroCount + AllZeroz);
    }
    return AllZeroz;
};



/*let NumberInBase =  number.toString(base);// переводим число в сс base , получаем строку
NumberInBase = parseInt(NumberInBase , base); // переводим строку в число
let i = 1; // степень сс
let Zerozcount = 1;// count of zeroz
let AllZeroz = 0; //just sum of all zeroz
let BaseInBase = 0;
while(Zerozcount >= 1){
    BaseInBase = parseInt(base.toString(base), base);// поидее должно лежать значение base в системе счисления base 3 = 10
    Zerozcount = NumberInBase/ Math.pow(BaseInBase,i);// поидее делит число в сс на основание сс в сс в степени i
    i++;
    AllZeroz = Math.floor(Zerozcount + AllZeroz);
}
return Math.floor(AllZeroz);*/

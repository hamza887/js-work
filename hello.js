'use strct';

const arr=[22,295,176,440,37,105,10,1100,86,52];
let tips=[];
let totals=0;
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
     tips=Math.floor((element/100)*15);
    // console.log(tips);
    totals=element
    // console.log(totals);
    console.log(`The total amount including tips(${tips}$) and the bills(${totals}$) is going to be ${totals+tips}$`);
    
}
// console.log(tips);

const calcAverage=(arr)=>{
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
    const tips=Math.floor((element/100)*15);
    console.log( tips);
     
    }
}
console.log(calcAverage(arr));


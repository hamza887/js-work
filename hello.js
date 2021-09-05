// 'use strct';

// const arr=[22,295,176,440,37,105,10,1100,86,52];
// let tips=[];
// let totals=0;
// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//      tips=Math.floor((element/100)*15);
//     // console.log(tips);
//     totals=element
//     // console.log(totals);
//     console.log(`The total amount including tips(${tips}$) and the bills(${totals}$) is going to be ${totals+tips}$`);
    
// }
// // console.log(tips);

// const calcAverage=(arr)=>{
//     for (let i = 0; i < arr.length; i++) {
//         const element = arr[i];
//     const tips=Math.floor((element/100)*15);
//     console.log( tips);
     
//     }
// }
// console.log(calcAverage(arr));

const calcTip= (bill)=>{
    return Math.floor((bill/100)*15)
}

const bills=[22,295,176,440,37,105,10,1100,86,52];
const tips=[];
const totals=[];
for (let i = 0; i <bills.length; i++) {
    const tip= calcTip(bills[i]);
    // console.log(tip);
    tips.push(tip);
  totals.push(tip+bills[i]);
 
}
console.log(bills,tips,totals);



const temperature=[3,-2,-6,-1,9,'error',13,17,15,14,9,5];
//  let max=[];
//  let min;
// for (let i = 0; i < temperature.length; i++) {
//   max= Math.max(...temperature[i])
   
    
// }
// console.log(max)
// if(typeof temperature===Number){
// const max= Math.max(...temperature);
// console.log(max);
// }
let max;
temperature.forEach(element => {
    if(typeof element==='number'){
         max= Math.max(...temperature);
        // console.log(max);
        return max
        }
});
console.log(max);


const guess= document.querySelector('.guess');
const check= document.querySelector('.check');
const message= document.querySelector('.message');
const number=document.querySelector('.number');


let random;
   random= Math.floor(Math.random()*20);
    console.log( number.value=random);


check.addEventListener('click',()=>{
    console.log('hello chekc');
});


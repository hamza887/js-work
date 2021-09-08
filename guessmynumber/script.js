
const guess= document.querySelector('.guess');
const check= document.querySelector('.check');
const message= document.querySelector('.message');
const number=document.querySelector('.number');
const again=document.querySelector('.again');
const body=document.querySelector('.body');

again.addEventListener('click',()=>{
  document.body.style.backgroundColor='white';
  document.body.style.color='black'
})


let random;
   random= Math.floor(Math.random()*20);
    console.log( number.value=random);


check.addEventListener('click',()=>{
    if(guess.value==number.value){
        console.log('you are write' , guess.value,number.value);
        number.textContent=random
    }else{
        if(guess.value<number.value){
            console.log('hello this is low');
        }else{
            console.log('this is high');
        }
    }
});


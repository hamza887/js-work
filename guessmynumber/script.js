
const guess= document.querySelector('.guess');
const check= document.querySelector('.check');
const message= document.querySelector('.message');
const number=document.querySelector('.number');
const again=document.querySelector('.again');
const score=document.querySelector('.score');
const highscore=document.querySelector('.highscore');





let random;
   random= Math.floor(Math.random()*20);
    console.log( number.value=random);

    let myguess=0;
    score.textContent=myguess
check.addEventListener('click',()=>{
    // let myguess=0;
    if(guess.value==number.value){
        console.log('you are write' , guess.value,number.value);
        number.textContent=random;
        message.textContent='Congrats You Won';
        document.body.style.backgroundColor='green';
       highscore.textContent=myguess;
        
        myguess++;
    console.log(myguess);
     } if(guess.value<number.value){
        message.textContent='This number is low'
     }if(guess.value>number.value){
        message.textContent='This number is High'
         
     }if(guess.value!=number.value){
        myguess++;
    console.log(myguess);
      score.textContent=myguess
    }else{
        console.log('hello');
    }
});
// const myhighscore= highscore.textContent=myguess;
// console.log(myhighscore+'this isyoru high score');
again.addEventListener('click',()=>{
    const myhighscore= highscore.textContent=myguess;
    console.log(myhighscore+'this isyoru high score');
    message.textContent='Start guessing....';
    score.textContent=0;
    document.body.style.backgroundColor='black';
    number.textContent='?';
    guess.value='';
    random= Math.floor(Math.random()*20);
    console.log( number.value=random);


})



const guess= document.querySelector('.guess');
const check= document.querySelector('.check');
const message= document.querySelector('.message');
const number=document.querySelector('.number');
const again=document.querySelector('.again');
const score=document.querySelector('.score');
const highscore=document.querySelector('.highscore');



again.addEventListener('click',()=>{
    location.reload();
})
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
        const again=document.querySelector('.again').style.display='block';
    highscore.textContent=myguess
        
    //     myguess++;
    // console.log(myguess);
    }else if(guess.value!=number.value){
        myguess++;
    console.log(myguess);
      score.textContent=myguess
    }
        else{
        if(guess.value<number.value){
           message.textContent='This number is low'
        }else{
           message.textContent='This number is High'
            
        }
    }
});


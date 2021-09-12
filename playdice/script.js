
// selecting elements
const score0el= document.getElementById('score--0');
const score1el= document.getElementById('score--1');
const diceel= document.querySelector('.dice');
const btwNew= document.querySelector('.btn--new');
const btnRoll=document.querySelector('.btn--roll');
const btnHold=document.querySelector('.btn--hold');
const current0el= document.getElementById('current--0');
const curretn1el=document.getElementById('current--1');



//starting conditions
score0el.textContent=0;
score1el.textContent=0;
diceel.classList.add('hidden');

const scores=[0,0];

let currentScore=0;
let activePlayer=0;

//Rolling dice Functionality

btnRoll.addEventListener('click',()=>{
    const dice =Math.floor(Math.random()*6)+1;
    console.log(dice);
    diceel.classList.remove('hidden');
    diceel.src=`dice-${dice}.png`;

    if(dice !==1){
      currentScore+=dice;
      current0el.textContent=currentScore
    }else{

    }

})



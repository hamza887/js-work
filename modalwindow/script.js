const mybutton=document.querySelectorAll('.show-modal');
const modal= document.querySelector('.modal');
const hidden=document.querySelector('.hidden');
const overlay=document.querySelector('.overlay');
const closemodal= document.querySelector('.close-modal')

const hideme=()=>{
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
let hamza=[]

for (let i = 0; i < mybutton.length; i++) {
    mybutton[i].addEventListener('click',()=>{
       modal.classList.remove('hidden');
       overlay.classList.remove('hidden');
    });
}
closemodal.addEventListener('click',hideme);
overlay.addEventListener('click',hideme);

document.addEventListener('keydown',(e)=>{
   console.log(e.key);
//    let hh=e.key;
//    hamza.push(hh);
//    console.log(hamza);
//   if(hamza.join('')=='hamza') console.log('We have arrived to '+hamza.join(''));
if(e.key==='Escape'&&!modal.classList.contains('hidden')){
    hideme()
}
})
console.log(hamza);
const mybutton=document.querySelectorAll('.show-modal');
const modal= document.querySelector('.modal');
const hidden=document.querySelector('.hidden');
const overlay=document.querySelector('.overlay');
const closemodal= document.querySelector('.close-modal')

for (let i = 0; i < mybutton.length; i++) {
    mybutton[i].addEventListener('click',()=>{
       modal.classList.remove('hidden');
       overlay.classList.remove('hidden');
    });
}
closemodal.addEventListener('click',()=>{
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
})
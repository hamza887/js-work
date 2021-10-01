const airline='TAP Air Portugal';
const plane='A320';

console.log(plane.length);
console.log('hello htis is hamza'.length);

console.log(airline.lastIndexOf('Air'));

console.log(airline.indexOf('Portugal'));
console.log(airline.lastIndexOf('P'));

console.log(airline.slice(4));
console.log(airline.slice(4,7));

console.log(airline.slice(airline.lastIndexOf('')*1));

console.log(airline.slice(-5));

const middleSeat=(seatNo)=>{
    // let seats=seatNo.toUpperCase();
    // (seats.includes('B'))?console.log('this is the side Seat'):console.log('this is the window seat');;
    const s =seatNo.toUpperCase().slice(-1)
    console.log(s);
    if(s==='B') console.log('this is the middle Seat 🥲');
    else console.log('you got lucky');
}
middleSeat('12C')
middleSeat('123b')


console.log(airline.toLocaleLowerCase());

const passenger='hAmZa';
console.log(passenger);

console.log(passenger.toLowerCase());
//passenger.charAt(1).toUpperCase();

console.log(passenger);
const lll=passenger.toLowerCase()
const firstLetter= passenger.charAt(0).toUpperCase();
console.log(firstLetter);


const ll= firstLetter+lll.slice(1);
console.log(ll);


const randomName=(name)=>{
   console.log(name[0].toUpperCase()+name.slice(1).toLowerCase());
};
randomName('hamMMza');

const loginEmail='  hamzabutt8KJK87@hotmail.com ';
console.log(loginEmail);
const lowerEmail= loginEmail.trim();

console.log(lowerEmail);

const normalEmail= loginEmail.toLowerCase().trim();
console.log(normalEmail);

const checkEmail=(email)=>{
    // console.log(email.split('').slice(-3).join(''));
    email.split('').slice(-3).join('')=='com'?console.log('congrats on comoing to my website'):console.log('no it is not the write email');;
}
checkEmail('hamzabutt887@hotmail.com')
checkEmail('hamzabutt887@hotmail.io')

//replacing

const priceFlight='288,567&';
const price= priceFlight.replace('&','$').replace(',','.');
console.log(price);

const annoucement='All passengers come to boarding door 23';
console.log(annoucement.replace('door','gate'));


const place='Airbuss hamza';
console.log(place.includes('hamza'));








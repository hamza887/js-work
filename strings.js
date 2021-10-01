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

console.log(place.startsWith('Airbuss'));

// const numbers= 343535;
// console.log(numbers.startsWith(34));

const callCops=()=>{
    console.log('I am calling the police');
}

const checkBaggage=(items)=>{
    (items.includes('gun' || 'knife')?callCops():console.log('you are good to go'));
}
checkBaggage('I have some food and some other stuff');

checkBaggage('i have a gun and a knife as well');
checkBaggage('i have a gun as well');
checkBaggage('i have a knife as well');

console.log('a.very.nice.string'.split('.').join(' '));


const capitalizeName=(name)=>{
    let hh=[]
   const names=name.split(' ');
   console.log(names);

   names.forEach(element => {
       element.charAt(0).toUpperCase();
       hh.push(element[0].toUpperCase()+element.slice(1))
   });
   console.log(hh);
}

capitalizeName('hamza mobeen zaka butt advocate')








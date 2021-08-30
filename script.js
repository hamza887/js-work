// console.log('hello world');

// let js= 'amazing';
// console.log('jones');

// let firstName='Hamza';
// console.log(firstName);


const country= 'Pakistan';
const continent= 'Punjab';
const population= '10 millino';

console.log(country);
console.log(continent);
console.log(population);

let age= 22;
age= 23;

const birthYear= 1998;
console.log(birthYear);

const ageJones= 2021 -1998;
const ageSarah= 2037-2018;
console.log(ageJones, ageSarah);
console.log();

const yourAge=(Age)=>{
    var today = new Date();
    var year = today.getFullYear();
    console.log(`Your were born in ${Age}`);
    console.log(`Your Age is ${year-Age}`);
}
yourAge(1998);

const firstName='hamza';
const lastName=' Zaka';
const hh=firstName.concat(lastName);
console.log(hh);


const wineRoom=(yourAge)=>{
    return (yourAge<=18)?console.log('Sorry You are not allowed'):console.log("Hi Welcome");;
}
wineRoom(18)

console.log(firstName===lastName);


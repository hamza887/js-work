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


let x, y;
 x=y = 25-10+5;
 console.log(x);

 //////coding exercise ////

 const Markheight=1.69;
 const MarkMass=78;
 const BMIMark= MarkMass/Markheight**2;
 console.log(BMIMark); 
const johnHeight=1.95;
const johnWeight=85;
const BMIJohn=johnWeight/johnHeight**2;
console.log(BMIJohn);
const higherBMI= BMIMark===BMIJohn;
console.log(higherBMI);

class BMI{
    constructor(name,height,mass){
        this.name=name;
        this.height=height;
        this.mass=mass;
    }
    higherBMI(){
        const BMIValue= Math.floor(this.mass/this.height**2);
        console.log(BMIValue);
    }
}
const marks= new BMI('Marks',1.69,78);
console.log(marks);
marks.higherBMI();
const John= new BMI('John',1.95,92)
console.log(John);
John.higherBMI()===marks.higherBMI()

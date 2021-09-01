'use strict';
// console.log('hello world');

// let js= 'amazing';
// console.log('jones');

// let firstName='Hamza';
// console.log(firstName);


// const country= 'Pakistan';
// const continent= 'Punjab';
// const population= '10 millino';

// console.log(country);
// console.log(continent);
// console.log(population);

// let age= 22;
// age= 23;

// const birthYear= 1998;
// console.log(birthYear);

// const ageJones= 2021 -1998;
// const ageSarah= 2037-2018;
// console.log(ageJones, ageSarah);
// console.log();

// const yourAge=(Age)=>{
//     var today = new Date();
//     var year = today.getFullYear();
//     console.log(`Your were born in ${Age}`);
//     console.log(`Your Age is ${year-Age}`);
// }
// yourAge(1998);

// const firstName='hamza';
// const lastName=' Zaka';
// const hh=firstName.concat(lastName);
// console.log(hh);


// const wineRoom=(yourAge)=>{
//     return (yourAge<=18)?console.log('Sorry You are not allowed'):console.log("Hi Welcome");;
// }
// wineRoom(18)

// console.log(firstName===lastName);


// let x, y;
//  x=y = 25-10+5;
//  console.log(x);

//  //////coding exercise ////

//  const Markheight=1.69;
//  const MarkMass=78;
//  const BMIMark= MarkMass/Markheight**2;
//  console.log(BMIMark); 
// const johnHeight=1.95;
// const johnWeight=85;
// const BMIJohn=johnWeight/johnHeight**2;
// console.log(BMIJohn);
// const higherBMI= BMIMark===BMIJohn;
// console.log(higherBMI);

// class BMI{
//     constructor(name,height,mass){
//         this.name=name;
//         this.height=height;
//         this.mass=mass;
//     }
//     higherBMI(){
//         const BMIValue= Math.floor(this.mass/this.height**2);
//         console.log(BMIValue);
//     }
// }
// const marks= new BMI('Marks',1.69,78);
// console.log(marks);
// marks.higherBMI();
// const John= new BMI('John',1.95,92)
// console.log(John);
// John.higherBMI()===marks.higherBMI()


// const age= 19;
//  const isOldEnough= age=>18;
//  if(isOldEnough){
//      console.log('You Are old enough to drive ✌');
//  }else{
//      console.log('you are not old enough sorry 😒');
//  };

//  const birthYear=1991;
//  let century;
//  if(birthYear<=2000){
//       century= 20;
//  }else{
//       century=21;
//  }
//  console.log(century);

//   const Markheight=1.69;
//  const MarkMass=78;
//  const BMIMark= Math.floor(MarkMass/Markheight**2);
//  console.log(BMIMark); 
// const johnHeight=1.95;
// const johnWeight=85;
// const BMIJohn=Math.floor(johnWeight/johnHeight**2);
// console.log(BMIJohn);

// const BMI= `Marks BMI (${BMIMark}) is higher than (${BMIJohn}) ✌`;
// console.log(BMI);

// if(BMIMark>BMIJohn){
//     console.log('Hi Mark is the real winner');
// }else{
//     console.log('I think John wins');
// }

// const inputYear= '1991';
// console.log(Number(inputYear));

// console.log('23'*'10'+4);

// let n= '1'+1;
// n=n-1
// console.log(n)

// const tipCal=(bill)=>{
//     return bill >= 50 && bill <=300 ? console.log(`Your 15% tip is ${ (15/100)*bill}, so the total amount is ${bill +(15/100)*bill}`):console.log(`Your 20% tip is ${(20/100)*bill}, so the total amount is ${bill +(20/100)*bill}`); 
// }

// tipCal(375);


// const yearsUntilRetirement =(yourAge)=>{
//        return 65-yourAge
// }

// console.log(yearsUntilRetirement(23));

// const calcAverage=(score1,score2,score3)=>{
//     const totalScore= (score1+score2+score3)/3;
//     console.log(`The total score would be ${totalScore}`);
// }

// const calcDolphins=(calcAverage)=>{
//    console.log('The total score of dolphins is '+calcAverage);
// }

// calcDolphins(calcAverage(44,23,71))
// const checkWinner=()=>{

// }

// const calcAverage= (a,b,c)=> (a+b+c)/3;
// console.log(calcAverage(2,3,4));

// const scoreDolphins= calcAverage(44,23,71);
// console.log(scoreDolphins);

// const scoreKoalas= calcAverage(65,54,49);
// console.log(scoreKoalas);

// const checkWinner = function(avgDolphins,avgKoalas){
//     if(avgDolphins>=2*avgKoalas){
//         console.log('Dolphins win ');
//     }else if(avgKoalas>= 2*avgDolphins){
//         console.log("Koalas wins");
//     }
// }


// const friend1= 'Micheal';
// const friend2= "Steven";
// const friend3="Peter";

// const friends= ['Micheal',"Steven","Peter"];
// console.log(friends);

// const years= new Array(1991,1984,2020);
// console.log(years[years.length-2]);

// friends[2]='haello';
// console.log(friends.length);

// const calcAge= (birthyear)=>{
//     return 2037- birthyear
// }

// const years=[1990,1998,2000,2020];
// const age1= calcAge(years[0]);
// console.log(age1);
// const ages= [calcAge(years[0]),calcAge(years[1]),calcAge(years[2])];

// console.log(ages);

// const friends= ['Micheal',"Steven","Peter"];

// friends.push('hamza');
// console.log(friends);

// friends.unshift('hamza');
// console.log(friends);

// friends.pop();
// // friends.pop();
// console.log(friends);

// friends.shift();
// console.log(friends);
// friends.push(23);
// console.log(friends);


// console.log(friends.indexOf('Steven'));

// console.log(friends.includes('peter'));

// if(friends.includes('Peter')){
//     console.log('hello peter')
// }

// const calcTip =(tip )=>{
//      return (tip/100)*15
// }
// const arr= [125,555,44];
// const hello= calcTip(arr[0]);
// console.log(hello);

// arr.map((hh)=>console.log(Math.floor(calcTip(hh))));

// // console.log(calcTip(200));

// const jones={
//     firstName:"hamza",
//     lastName:"Zaka",
//     age : 2021-1998,
//     job:"Programmer",
//     myFriends:['hamza','zaka','mobeen'],

//     calcAge: function(birthyear){
//         const date=new Date();
//         const year =date.getFullYear();
//         return year-birthyear;
//         console.log('hello birthyear');
//     }
// }
// console.log( jones.calcAge(1998));

// console.log(jones);
// console.log(jones.lastName);

// const nameKey= "Name";
// console.log(jones['first'+nameKey]);
// console.log(jones['last'+nameKey]);

// const interestedIn= prompt('what do you want to know about me');
// console.log(jones[interestedIn]);
// console.log('hello')
// console.log('jdlfkjdlfkj');

const myProfile ={
    firstName:'hamza',
    lastName:'zaka',
    age:23,
    driver:true,
    job:'computer',

    aliveYear:function(){
      const date= new Date();
      const currentYear= date.getFullYear();
      const totalYears= currentYear-(this.age);
      console.log(`If your Age is ${this.age} and the Year is ${currentYear}, Your total years are ${totalYears}`);
    }
}
console.log(myProfile.aliveYear());

const markBMIs={
    firstName:'Mark',
    lastName:'Miller',
    mass: '78',
    height:'1.69',
    data:0,
    calcBMI: function (){
        const total= (this.mass/this.height)**2;
        this.data=Math.floor(total);
        console.log(`The total BMI of ${this.firstName} is ${Math.floor(total)}`);
    }

}
markBMIs.calcBMI();

const johnBMIs={
    firstName:'John',
    lastName:'Smith',
    mass: '92',
    height:'1.95',
    data:0,
    calcBMI: function (){
        const total= (this.mass/this.height)**2;
        this.data=Math.floor(total);
        console.log(`The total BMI of ${this.firstName} is ${Math.floor(total)}`);
    }

}
johnBMIs.calcBMI();
console.log( johnBMIs.data);

if(markBMIs.data>johnBMIs.data){
    console.log(`${markBMIs.firstName} has a higher data ${markBMIs.data}`);
}else{
    console.log(`${johnBMIs.firstName} has a higher data ${johnBMIs.data}`);

}

// for (let hello = 0; hello <=10; hello++) {
//     console.log('I  am hello no '+hello);
    
// }

const arr=['hamza','zaka',23-1,'teacher',['hello','hello2','hello3']];
const types=[];
let hh=[]
for (let i = 0; i <arr.length; i++) {
    // console.log(arr[i], typeof arr[i]);
    types[i]=typeof arr[i];
    
}
// console.log(types);

arr.forEach(element => {
    console.log(element);
    hh= typeof element;
    console.log(hh);
});







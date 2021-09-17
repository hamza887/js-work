
'use strict'
// const restraurant={
//     name:"Classico Italiano",
//     location: 'cia Angelo Tavanti 23, Firenze, Italy',
//     categories: ['Italian','Pizzeria','Vegeterian','Organic'],
//     starterMenu:['Focaccia','Bruschetta','Garlic bead','Caprese Salad'],
//     mainMenu:['Pizza','pasta','risotto'],

//     // order=(starterindex,mainindex)=>{
//     //   return[this.startMenu[startindex]+this.categories[mainindex]]
//     // }
// };

const arr=[2,3,4];
const a =arr[0];

const [x,y,z]=arr;

console.log(arr);
console.log(x);

// const [first,  ,second]=restraurant.mainMenu

// console.log(first,second);

// DESTRUCTING OBJECTS

const arr3=[7,8,9];
const arr2=[1,2,3,4];
console.log([1,2,...arr2]);

const restraurant={
  name:"Classico Italiano",
  location: 'cia Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian','Pizzeria','Vegeterian','Organic'],
  starterMenu:['Focaccia','Bruschetta','Garlic bead','Caprese Salad'],
  mainMenu:['Pizza','pasta','risotto'],

  // order=(starterindex,mainindex)=>{
  //   return[this.startMenu[startindex]+this.categories[mainindex]]
  // }
};

const newMenu= [...restraurant.categories];
const mainMenuCopy= [...restraurant.mainMenu]
const menu= [...newMenu,...mainMenuCopy];
console.log(menu);

const str= 'hamza';
const letters=[...str].reverse();

const [Pizza,risotto,...otherfood]=[
  ...restraurant.mainMenu,...restraurant.starterMenu
]
console.log(Pizza,risotto,otherfood);

const add=(...numbers)=>{
  let sum=0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
}
 add(2,3,4,5);

 const xh=[23,2,4,5];
 add(...xh);

console.log(3|| 'jones');

const restraurantguests=22;
const guests1= restraurantguests || 10;
console.log(guests1);

// const guest2= restraurantguests ?? 10;
// console.log(guest2);

// const foo = null ?? 'default string';
// console.log(foo);

// function sayhi(){
//   console.log(name);
//   console.log(age);
//   var name='lyndia';
//   let age=22;

// }
// sayhi();

const game={
  team1:"Bayern Munich",
  team2:''

}



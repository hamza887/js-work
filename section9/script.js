

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


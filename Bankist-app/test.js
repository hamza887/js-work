const julia=[3,5,2,12,7];
const Kate=[4,1,15,8,3];

const data= julia.concat(Kate);



let juliaDog=[];
let kateDog=[];


 data.forEach((element,key) => {
     element<=5?juliaDog.push(element+' 🐶its a puppy '+(key)):juliaDog.push(element+' 🐶its a dog '+key)
 });

//  console.log(juliaDog);
//  console.log(kateDog);

const dogAges=[5,2,4,1,15,8,3];
let humanDogs=[]
 const calcAvergeDogAges=(ages)=>{
   ages.map(a=> a<=2? humanDogs.push(2*a):humanDogs.push(16+a*4))

 }

 calcAvergeDogAges(dogAges)
 console.log(humanDogs);
 
 const hh= humanDogs.filter(aa=>aa>=35)
 console.log(hh);

 
const reducer = (previousValue, currentValue) => previousValue /currentValue;

humanDogs.reduce(reducer);
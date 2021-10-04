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

 const helloa=dogAges.filter(aa=>console.log(aa<10)).map(aa=>aa<=2? console.log( 2*aa):console.log (16+aa*4))


console.log(helloa);

// const result= dogAges.filter(aa=>aa<10);
// console.log(result);
 
//  const hh= humanDogs.filter(aa=>aa>=35)
//  console.log(hh);

 
// const reducer = (previousValue, currentValue) => previousValue /currentValue;

// humanDogs.reduce(reducer);



// CHANING METHOD

const calcverages=(ages)=>{
   ages.map(age=> age<=2?2*age:16+age*4)
   .filter(age=>age>=18)
   .reduce((acc,age,i,arr)=> acc*age/arr.length,0)
}

const ages1=calcverages([5,2,4,1,15,8]);
console.log(ages1);

const js=[2,3,4,5,6,7];
js.map(aa=>console.log( aa*2));

js.filter((aa,bb,cc)=>console.log())

console.log(js);

const filtered= js.filter((jj)=> jj>5)
  console.log(filtered);

 const findme= js.find(aa=> aa==5)
 console.log(findme);

const julia=[3,5,2,12,7];
const Kate=[4,1,15,8,3];

const data= julia.concat(Kate);



let juliaDog=[];
let kateDog=[];


 data.forEach((element,key) => {
     element<=5?juliaDog.push(element+' 🐶its a puppy '+(key)):juliaDog.push(element+' 🐶its a dog '+key)
 });

 console.log(juliaDog);
 console.log(kateDog);

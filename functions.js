'use strict';

const bookings=[];
const createBooking=(flightNum,numPassengers=1,price=199*numPassengers)=>{
//  numPassengers=numPassengers||1;
//  price=price||"199$";
//  flightNum=flightNum||"16B";
 const booking={
     flightNum,
     numPassengers,
     price
 }
 console.log(booking);
 bookings.push(booking)
}
createBooking('12Bbb',2);
console.log(bookings);

const flight ='LH234';
const jones={
    name:'hamza zaka',
    passport:234556
}

const checkIn=(flightName,passport)=>{
    flightName='13B';
    passport.name='Mr '+passport.name
    console.log(flightName,passport);
    if(typeof passport.passport==='number') console.log('oh yaa you go t it right');
    else console.log('you are not right');
      
}
    checkIn(flight,jones);

    console.log('NEXT TIMELINE STARTS');

    const name=(myname)=>{
       return myname.toUpperCase()
    }

    const whatIsYourName=(yourName)=>{
       console.log(yourName,);
    }
    
const oneWord =(str)=>{
    return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord=(str)=>{
    const [first, ...others]=str.split(' ');
    return [first.toUpperCase(),...others].join(' ');
}

const transformer=(str,fn)=>{
    console.log(`Original string : ${str}  `);
    console.log(`Original string : ${fn(str)}  `);

    console.log(`Transformed by : ${fn.name}`);

}
transformer('JSidjhfksdj is the best ',upperFirstWord);


//functions returning fucntions

const greet=(greeting)=>{
    return (name)=>{
       console.log(`${greeting} ${name}`);
   }
}

 const greethey= greet('hy');
 greethey('hamza')
 greethey('zaka')







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

const checkIn=(flightNum,passenger)=>{

}
/* first program 

let js = 'amaze';
      if(js =='amaze') alert('hello world!');
      5+2+3;
      console.log(2+5);*/

/* dynamic typing and primitive data types



let firstname='Prajin';
let lastName='Khatiwada';
let age = 24;
if(age>=18) alert(true);
console.log(typeof "Prajin");
console.log(typeof 15);
console.log(typeof true);



let cal = 12;
console.log(cal);
cal = 'hello';
console.log(typeof cal);

*/

/*let const and var difference and example

 let age = 23;
 age = "twentythree";
 const nope = 13;
 //nope = "twentythree"; cannotake same variable name in const

  var mylove = 'kanchi';
  mylove = 'infinity'

  */

/*
  // operators basic example


  const agePrajin = 2023-1999;
  console.log(agePrajin);
  const ageLove = 2023-2004
  console.log(ageLove);
  console.log(agePrajin,ageLove);
  const diff = agePrajin-ageLove;
  console.log(diff);
  if(diff>=4) 
  console.log('proper match and soo much love for each other');
  console.log(agePrajin*2,ageLove/4,diff+4-2,diff*4/4+5-2,2**3);
  
  // concatenate string math operator

  let fname = 'Prajin';
  let lname = 'Khatiwada';
  console.log(fname+lname);
  console.log(fname+' '+lname);

  //assignment operator

   let x = 3+4;
   console.log(x);
   x+=10;  // x=x+10
   console.log(x);
   x++;
   console.log(x);  // x=x+1
   x--;
   console.log(x);  //x=x-1


   


   // comparison operator  <,>,>=,<=


const age = 19;
console.log(age>=18);

const eligible_voter = age>=23;
console.log(eligible_voter);



*/

/* coding challenge 1

var prajin_mass = 92;
var prajin_height = 1.95;
var kanchi_mass = 78;
var kanchi_height = 1.69;
let prajinBmi = prajin_mass/prajin_height**2;
console.log(prajinBmi);
let kanchiBmi = kanchi_mass/kanchi_height**2;
console.log(kanchiBmi);
const prajin_higher_bmi = prajinBmi < kanchiBmi;
console.log(prajin_higher_bmi);

*/


/*  string and templates example

const fname = 'Prajin';
const lname = 'Khatiwada';
const birthYear = 1999;
const year = 2023;
const job = 'student';

const prajin = "I'm " +fname+ ' ,a ' +(year-birthYear) + ' years old '
+job + '!';
console.log(prajin);
const prajinNew = `I 'm ${fname}, a ${year-birthYear} year old ${job} `;

console.log(prajinNew);

console.log(`just a displayed string`);
console.log('string with \n new line \n another new line');
console.log(`string with 
 newline 
 another new line`);

 */


 /* if else statement decisons

 const age = 9;
 const isEligible = age>=18;
 
 if(isEligible){
    console.log(`You can start driving license`);
 }
 else{
    const remAge=18-age;
    console.log(`you cannot start driving license`);
    console.log(`${remAge} remaining year`);

 }
const bYear = 1999;
let century ;
if(bYear <= 2000){
    century = 20;

}
else
{

    century = 21;
}
console.log(century);

*/

/*  coding challenge 2 



var prajin_mass = 92;
var prajin_height = 1.95;
var kanchi_mass = 78;
var kanchi_height = 1.69;
let prajinBmi = prajin_mass/prajin_height**2;
console.log(prajinBmi);
let kanchiBmi = kanchi_mass/kanchi_height**2;
console.log(kanchiBmi);
const prajin_higher_bmi = prajinBmi > kanchiBmi;

if(prajin_higher_bmi){
    console.log(`Prajin BMI${prajinBmi} is higher than kanchi BMI${kanchiBmi}`);

}
else{
    console.log(`Kanchi BMI ${kanchiBmi} is higher than Prajin BMI${prajinBmi}`);

}


*/

 











      
      
      
      
    const year = '1991';
    console.log(Number(year));
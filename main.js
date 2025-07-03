import { Car } from "./Car.js";
import { isMale } from "./variables.js";
import { studentNames,dailyTemps } from "./iterables.js";
import { person } from "./objects.js";
import { favoriteFoods } from "./iterables.js";

// import { MyButton } from "./MyButton.js";

// const myNewCar = new Car("Ford",1971);

// //document.getElementById("garage").innerHTML = myNewCar.age()
// //alert (isMale)

// const newButton = new MyButton("blue","Register","10px","white")
// newButton.render();

// const newButton2 = new MyButton("Green","Log In","10px","white")
// newButton.render();

//FOR loop - loops through a block of code a number of times

//for (express 1; expression 2; expression 3)
//{
    //code block to be executed
//}

let i =0
for (;i<2;i++)
{
    console.log("The value of i is:",i)
}

i = i+1; // i++

for (let j =20; j>=0;j--)
{

    console.log("The value of j is: ",j)
}

//j=j-1; same as j--;

// using a for loop print out the elemnts of the studentName array

// for(i =0;i<studentNames.length;i++)
// {
//     console.log(studentNames[i+2])
// }


// *****
// *****
// *****
// *****
// *****
// *****

// for(let r=0;r<5;r++)
// {
//     console.log("*****")
// }

let starLine="";

// for (let g=0;g<5;g++){

//     for(let f=0;f<5;f++){
//         starLine+= "*"
//     }
//     console.log(starLine)
//     starLine="";
// }

//FOR..IN Loops through the properties of an object

// for (key in object) = FOR as long as there is a KEY IN the following OBJECT 
// {
//     //code block
// }


console.log(person["firstName"])


let txt="";

for (let x in person)
{
   
    if(typeof person[x] !== "function")
    {
         txt = txt +person[x]+" "
    }
}

console.log(txt)

// The temperature on Friday is 34

// for(let day in dailyTemps)
// {
//     console.log(`The temperature on ${day} is ${dailyTemps[day]}`)
// }

//which days had a temperature of above 22, not included
//print those days out 
//I want a statement printed that says: There are x days that experienced a temperature above 22 degrees.

// for(let day in dailyTemps)
// {
//     dailyTemps[day]>22 ? console.log(`The temperature on ${day} is ${dailyTemps[day]}`) : null;
// }

let count =0;

for(let day in dailyTemps)
{
    //dailyTemps[day]>22 ? count+=1 : null;
    const temp = dailyTemps[day];
    console.log(`${day}: ${temp}`)
    if(temp>22)
    {
        count++;
    }
}

console.log(`There are ${count} days that experienced a temperature above 22 degrees.`)



//FOR..OF Loops through the values of an iterable  object a.k.a arrays

// for (variables of iterable)
// {

// }

const cities = ["Vryheid", "Johannesburg","Polokwane","Pretoria"]
const hometown = cities[0]; //bob = ['b','o','b']

let text ="";
for (let location of cities)
{
    console.log(location) // location = cities[x]
}

let city = "";

for (let character of hometown )
{
    
    console.log(`${character}        ${character}`)
    city=city+character;
    
}
console.log(city)

// VRYHEID
//R       R
//Y       Y
//H       H
//E       E
//I       I
//D       D
//VRYHEID


//The second type of Loops, unknown inputs

// while (condition)
// {
//     //code block
// }

let y = 10;

while (y<20){
    console.log("We good");
    y++
}

// I want to do a countdown from , console, and at the of the countdown it musy say BLAST OFF!

while (y>0)
{
    console.log("Coundown: "+y)
    y--
}
console.log("Blast Off!")

let input="";

// while(input!=="exit"){
//     input = prompt("What is your name?") 
//     document.getElementById("demo").innerHTML=input
// }

// DO WHILE, a variation of a while loop

// do{
//     // code block here MUST run once and then may run again as long as the condition is true!
// }
// while(condition)

txt ="";
i=0;

do{
    txt += "<br>The number is "+i;
    i++
}
while(i<10)

document.getElementById("demo").innerHTML=txt;

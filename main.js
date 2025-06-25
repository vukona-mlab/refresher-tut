//let const var
//Yes/No
//On /Off
//True/False 

let x = 5;
console.log("1. ",5>3); //Comparison and logic Operators > greaater than sign
console.log("2. ",12===2) //equals to
console.log("3. ",4!==6) // not equals
console.log("4. ",x<8) //lesser than sign
console.log("5. ",(7%2)>0) //remainder sign
console.log("6. ",(6%2)===0) //remainder sign

let age = 4;

// Ternary Operator syntax: variableName = (condition) ? value1: value2;
let canVote = (age<18) ? "Too Young to vote": "Yes, voter allowed.";

console.log("7. Can You Vote? ",canVote)

// Conditional Statement
// IF = to specify a block of code that can run if the condition is true

let greet = ()=>{
    console.log("Hello World")
}



let permission = true;

// if (condition) { 
//  whatever to to run if the condition is true, goes in here
// }

if(permission){
    greet();
}

console.log("At the end")

let grade = 79;

// if your mark is 80 and above you get a distinction

if(grade>=80)
{
    console.log("You get a distinction!")
}
else
{
    console.log("You passed, but no distinction.")
}

//let year = 2016;
//let ladida = 1322;

// Determine if the year is a leap year

let leapYearChecker = (year) => {
    if (year%4===0)
    {
        console.log("Its a leap year")
    }
    else
    {
        console.log("Not a leap year.")
    }
}

leapYearChecker(2021); // function call

// write a function that checks if a number is odd or even

let num = 27;

let oddEvenChecker = (number) =>{
    if(number%2===0)
    {
        console.log("This number is even")
    }
    else
    {
        console.log("This number is odd.")
    }
}

oddEvenChecker(num);

// Back to Grades

grade = -90;

// 90 and above grade A
// 75 and above is  Grade B
// 50 and above is Grade C
// Less than 50 is a fail

let gradeScore = (marks) =>{
    if(marks>=90 && marks <= 100)
    {
        console.log("Grade is A")
    }
    else if(marks>=75 && marks <90)
    {
       console.log("Grade is B")
    }
    else if(marks>=50 && marks<75)
    {
        console.log("Grade is C")
    }
    else if(marks<=49 && marks>=0)
    {
        console.log("Grade is F")
    }
    else //this is now the default value
    {
        console.log("Grade is above total")
    }
}

gradeScore(Math.abs(grade))

let gradeScore2 = (marks) =>{

    let myGrade;
    if(marks>=90 && marks <= 100)
    {
        myGrade = "A";
    }
    else if(marks>=75 && marks <=90)
    {
       myGrade = "B";
    }
    else if(marks>=50 && marks<=75)
    {
        myGrade = "C";
    }
    else if(marks<=49 && marks>=0)
    {
        myGrade = "F";
    }
    else //this is now the default value
    {
        myGrade = "Summa Cum Laude";
    }
    console.log("My grade is: "+myGrade)
}

//gradeScore2(grade);

//Switch statemenrs

let y = 7;

switch(y)
{
    case 5:
        console.log("Its a 5")
        break;
    case 6:
        console.log("Its a 6")
        break;
    case 7:
        console.log("Its a 7")
        break;
    default:
        console.log("Default statement: I dont know this number")
}

let day;

switch(new Date().getDay())
{
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Mon";
        break;
    case 2:
        day = "Tues";
        break;
    case 3:
        console.log("Today is a Wednesday")
        console.log("Line 2")
break;
    case 4:
        day = "Thurs";
break;
    case 5:
        day = "Fri";
break;
    case 6:
        day = "Satur";
        break;
}

//console.log("The day is :",day)

//Write a function using switch to determine the action based on the color of the robot

let robot = "yellow";

switch(robot.toLowerCase()){
    case "red":
        console.log("Stop!!!");
        break;

    case "orange":
        console.log("Slow down");
        break;

    case "green":
        console.log("Go!");
        break;

    default:
        console.log("Invalid color")
}

// write a simple calculator function using switch statements that adds, subtracts, multiplies or divides 2 numbers together.
let num1 =1;
let num2 = 3;
let operator = "/";


function calculator(number1,number2,ops)
{
    switch(ops){
        case "+":
            return number1+number2
        case "-":
            return number1-number2
        case "*":
            return number1*number2
        case "/":
            return number2!==0 ? number1/number2: "Cannot divide by zero [0]"
        default: 
            return "Invalid Operator"       
    }
}

console.log(calculator(num1,num2,operator));
console.log("This too is an end")
//console.log("The total is: ",output)
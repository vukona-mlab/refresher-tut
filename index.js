// data types: numbers, strings, boolean, undefined, null, symbol, objects, arrays
// lists...

// declaring keywords
// let, const, var
// const is permanent during the running of the programme. Common
// let allows changing of variable, block scoped. Common
// var allows changing of variable, not block scoped. Rarely used

const age = 35 // declaration keyword, variable name, equal sign, value
const surname = " De Kerk " // combinations of chars
const firstName = 'Vee is ' + 35
const ageAsString = `${ age } is my age` // string literals, graves , backtick
// allows you to combine strings and variables
let isMale = true // true || false, boolean
let isRich = null
let unAssigned // // declaration keyword, variable name == undefined
console.log(isRich);

// methods: a function embedded on the datatypes in JS, 
console.log(surname.trim());
if(surname.trim() === "") {
    console.log('surname is required');
    
} else {
    console.log(surname);
    
}
// property 
console.log(surname.length); // property
isMale = false;
console.log(isMale);

console.log(ageAsString);
console.log(ageAsString.charAt(3));
console.log();

console.log("whIte".toLowerCase() === "WHite".toLowerCase());
// implicit and explicit conversion between datatypes before it checks values

// common ones
// methods: there's a use case for everything.
// objects + classes: on Thursday. We will cover methods vs functions
// hoisting

// here comes the arrays...

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
const thisVariableUsesCamelCasing = true
const BACKEND_URL = "keys" // rarely used
const ageAsString = `${age} is my age` // string literals, graves , backtick
// allows you to combine strings and variables
export let isMale = true // true || false, boolean
let isRich = null
let unAssigned // // declaration keyword, variable name == undefined
// console.log(isRich);

// methods: a function embedded on the datatypes in JS, 
// console.log(surname.trim());
if (surname.trim() === "") {
    console.log('surname is required');

} else {
    // console.log(surname);

}
// property 
// console.log(surname.length); // property
isMale = false;
// console.log(isMale);

// console.log(ageAsString);
// console.log(ageAsString.charAt(3));
// console.log();

// console.log("whIte".toLowerCase() === "WHite".toLowerCase());
// implicit and explicit conversion between datatypes before it checks values

// common ones
// methods: there's a use case for everything.
// objects + classes: on Thursday. We will cover methods vs functions
// hoisting

// here comes the arrays...

// arrays: used to store multiple elements in one variable, uses the [] brackets
// object: collection of key value pairs, where key is property, and value is the property value

let courses = ["Computer Science", "Biological Science", "Information Technology", "Electrical Engineering"]
let matrix = [
    [0, 1, 3],
    [4, 3, 4],
    [3, 5, 6]
]
let numbers = [4, 5, 6, 7, 6, 7, 9, 10, 23, 12, 10, 2, 4, 3, 10] // sets are used to removing duplicates in arrays
// index: start at 0, making the last element to be at index = courses.length - 1
console.log(courses[0]);
console.log(courses[courses.length - 1]);


let csCourse = {
    courseName: "Computer Science",
    courseDuration: 3,
    modules: [
        "Mathematics   ",
        "Systems Design",
        "Database Design"
    ]
}

// console.log(csCourse)

csCourse.courseName = "Information Technology"

csCourse.modules.push("Statistics") // adding new elements, to the end of an array

csCourse.modules[4] = "Mobile Computing" // adding new element to nested array in a specific 
csCourse.modules[0] = csCourse.modules[0].trim() // updating nested array string
csCourse.apsLimit = 24 // adding new property key and value
delete csCourse.courseName

// looping to check for values in an array (or object) while not being sure which index something is in

// console.log(csCourse);

let array = [
    34,
    "Vee",
    {
        name: "Vee",
        surname: "Mnisi"
    },
    undefined,
    [3, 5]
]
console.log(array);





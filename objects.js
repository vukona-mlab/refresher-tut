// Javascript Object are KING

//Objects are containers {
//  Properties
//  Methods = Functions stored as properties
// }

const person = {
    firstName:"Mandla",
    surname:"Mkhize",
    age:32,
    heightInMeters: 1.74,
    greeting:  ()=>{
        return "Sanibonani!";
    }
}

console.log("My name is: "+person.firstName);

console.log(person.greeting());

const zinhle = person; // this isnt a copy, you jusy created another on this object

console.log("And my name is: "+zinhle.firstName);

const robot1 = {
    color:"Red",
    action:"Stop!",
    doAction: function (){
        return this.action;
    }
}

console.log(robot1.doAction())

const robot2 = {
    color:"Orange",
    action:"Slow down",
    doAction: function (){
        return this.action;
    }
}

const robot3 = {
    color:"Green",
    action:"Go!",
    doAction: function (){
        return this.action;
    }
}

console.log(robot2.doAction());
console.log(robot3.doAction());

//Constructors

function Robot(color,action){
    this.color=color;
    this.action=action;
    this.doAction= function (){
        return this.action;
    }
}

const robot4 = new Robot("blue","Jump!");
console.log(robot4.doAction());



// create a constructor for book objects

function Book(title, author,publishDate){
    this.title = title;
    this.author = author;
    this.publishDate = publishDate;
    this.getTitle = function (){
        return this.title;
    }
    this.getAuthor = function (){
        return this.author;
    }
    this.getPublishDate = function (){
        return this.publishDate;
    }
}

const book1 = new Book("My Life","Mondli Khoza","26 June 2025");
const book2 = new Book("The Lion King","Mondli Khoza","26 June 2025");
console.log(book1.getTitle());

//Below the 'this' refers to the console and it does not have a doAction() property[method]
//console.log(this.doAction())

//Check what type of data type a method is returning typeof
console.log(typeof book1.getTitle()) // string

console.log(book1.getAuthor())


//We can add to object literals with ease as below
person.address = "123 Hola Street";

console.log(person.address)


book1.numOfPages = 432;
console.log(book1.numOfPages)

book1.setTitle = function (title){
    this.title = title;
}

book1.setTitle("The Little Mermaid")
console.log(book1.getTitle())

//Comment document if you will be running on the terminal
//document.getElementById("demo").innerHTML = book1.getTitle()

Book.prototype.setTitle = function (title){
    this.title = title;
}


// The function setTitle only belongs to book1, its not part of the constructor of Book
book2.setTitle("Hercules") // Error:  TypeError book2.setTitle is not a function
console.log(book2.getTitle())

class Car{
    constructor(name,year)
    {
        this.name=name;
        this.year=year;
    }
    age()
    {
        return (2025-this.year);
    }
}

const mazda6 = new Car ("Mazda",2015);
console.log(mazda6.name);
console.log("It is "+mazda6.age()+" yrs old");

document.getElementById("demo").innerHTML = JSON.stringify(book1);
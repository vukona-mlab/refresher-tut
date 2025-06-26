import { Car } from "./Car.js";
import { isMale } from "./variables.js";
import { MyButton } from "./MyButton.js";

const myNewCar = new Car("Ford",1971);

document.getElementById("garage").innerHTML = myNewCar.age()
alert (isMale)

const newButton = new MyButton("blue","Register","10px","white")
newButton.render();

const newButton2 = new MyButton("Green","Log In","10px","white")
newButton.render();
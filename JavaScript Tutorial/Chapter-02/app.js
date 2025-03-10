// console.log("Hello World");
// console.log("Apna College");
let a=5;
let b=4;
console.log("sum is :", a+b); 

// Template literals

let eraserPrice=5;
let pencilPrice=10;
// let output= "The total price is : " + (eraserPrice + pencilPrice) + " "+"Rupees.";
// console.log("The total price is :", eraserPrice + pencilPrice, "Rupees.")
// console.log(output);
console.log(`The total price is : ${eraserPrice + pencilPrice} Rupees.`);

// Conditional Statements

let color ="blue";

if(color ==="red"){
    console.log("Stop!");
} else if(color ==="yellow"){
    console.log("Slow Down!");
} else if(color ==="green"){
    console.log("Go!");
}else{
    console.log("Traffic Light System Is Broken!");
}

// Logical Operator:

let str = "apple";

if( (str[0] ==='a') && (str.length > 3) ){
    console.log(`${str} is a Good String`);
} else{
    console.log("Not a Good String");
}

// Switch Statement:

let col = "red";

switch(col){
    case "red":
        console.log("Stop!");
        break;
    case "yellow":
        console.log("Slow Down!");
        break;
    case "green":
        console.log("Go!");
        break;
    default:
        console.log("Broken Light!");
}

// Alert and Prompt:

alert("something is wrong");
console.log("This is a simple log");
console.error("This is an error msg");
console.warn("This is a warning msg");

let firstName = prompt("enter first name");
let lastName = prompt("enter last name");
let msg = "welcome" + " " + firstName + " " + lastName + "!";
alert(msg);
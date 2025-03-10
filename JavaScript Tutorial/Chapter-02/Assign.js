// 1.)

let num = 20;

if(num % 10 == 0){
    console.log("good");
} else{
    console.log("bad");
}

// 2.)

let userName = prompt("enter users name");
let userAge = prompt("enter users age");
alert(`${userName} is ${userAge} years old.`);

// 3.)

let quarter = 3;

switch(quarter){
    case 1:
        console.log("January, February, March ");
        break;
    case 2:
        console.log("April, May, June");
        break;
    case 3:
        console.log("July, August, September ");
        break;
    case 4:
        console.log("October, November, December ");
        break;
    default :
        console.log("Invalid number entered");
}

// 4.)

let str = "Anirudh";

if( ((str[0] === 'a') || (str[0] === 'A'))  && (str.length > 5) ){
    console.log("Golden String");
} else{
    console.log("Not a Golden String"); 
}

// 5.)

let a = 5;
let b = 6;
let c = 7;

if(a>b){
    if(a>c){
        console.log(`${a} is largest`);
    } else{
        console.log(`${c} is largest`);
    }
} else{
    if(b>c){
        console.log(`${b} is largest`);
    } else{
        console.log(`${c} is largest`);
        console.log(c);
    } 
}

// 6.)
 let num1 = 32;
 let num2 = 47852;

 if( (num1 % 10) == (num2 % 10 ) ){
    console.log(" Have Same digit");
 } else{
    console.log("Not have a Same digit");
 }

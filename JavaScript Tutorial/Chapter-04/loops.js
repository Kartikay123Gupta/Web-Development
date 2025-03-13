// Multiplication

let n = prompt("Write your number");
n = parseInt(n);

for(let i=n; i<=n*10; i=i+n){
    console.log(i);
}

for(let count=1; count<=10; count++){
    console.log(count*n);
}

// Favourite movie

const favMov = "Avengers";
let guess = prompt("Enter your Fav Movie");

while(guess != favMov){
    if(guess == "quit"){
        console.log("you quit!");
        break;
    }
    
    guess = prompt("Wrong guess,try again!");
}

if(guess == favMov){
    console.log("Congrats!!");
}

// Loop with Arrays

let fruits = ["mango","apple","banana","litchi","orange"];
fruits.push("strawberry");

for(let i=0; i < fruits.length; i++){
    console.log(i,fruits[i]);
}

for( let i = fruits.length-1; i>=0; i=i-2){
    console.log(i,fruits[i]);
}
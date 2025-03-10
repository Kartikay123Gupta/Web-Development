// 1.)
let arr = [7,9,0,-2];
let n = 3;

console.log( arr.slice(0,n) );

// 2.)
 arr = [7,9,0,-2];
 n = 3;

 console.log( arr.slice(arr.length - n) );

//  3.)
let str = prompt("Enter a string"); 

if(str.length == 0){
    console.log("string is blank");
} else{
    console.log("string is not blank");
}

// 4.)
let msg = "HeLLO";
let idx = 1;
if( msg[idx] == msg[idx].toLowerCase() ){
    console.log("Character is in lowerCase");
} else{
    console.log("Character is not in lowerCase");
}

// 5.)
let chr = prompt("Enter a string"); 
console.log( `Original string is ${chr}` );
console.log( `Original string without spaces is ${chr.trim()}` );

// 6.)
arr = ["hello",'a',23,64,99,-6];
let item = 64;

if( arr.indexOf(item) != -1 ){
    console.log("Element exist in an array");
} else{
    console.log("Element do not exist in an array");
}
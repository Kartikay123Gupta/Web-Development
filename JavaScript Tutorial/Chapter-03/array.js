let names = [ "adam", 25 , 6.1];
console.log( names[0] );
console.log( names[0][0] );
console.log(names[0][1]);
console.log(names[0].length);

let fruits = ["mango","apple","litchi"];
fruits[0] = "banana";
console.log(fruits);

fruits[10] = "papaya";
console.log(fruits);

// Array Methods:-

 fruits.push("watermelon");
 console.log(fruits);

 fruits.pop();
 console.log(fruits);

 fruits.unshift("strawberry");
 console.log(fruits);

 fruits.shift();
 console.log(fruits);

 console.log( fruits.indexOf("mango") );
 console.log( fruits.indexOf("apple") );

 console.log( fruits.includes("mango") );
 console.log( fruits.includes("apple") );

 let primary = ["red","yellow","blue"];
 let secondary = ["orange","green","violet"];

 console.log( primary.concat(secondary) );
 console.log(primary);
 console.log(secondary);

 console.log( primary.reverse() );
 console.log(primary);

 let colors = ["red", "yellow","blue", "orange", "pink", "white"];

 console.log( colors.slice() );
 console.log( colors.slice(2) );
 console.log( colors.slice(2,3) );
 console.log( colors.slice(-2) );

 console.log( colors.splice(4) );
 console.log(colors);

 console.log( colors.splice(0,1) );
 console.log(colors);

 console.log( colors.splice(0,1,"black","grey") );
 console.log(colors);

 let cars=["toyota","xuv","maruti","bmw","ferrari"];
 console.log( cars.splice(1,0,"mercedes") );
 console.log(cars);

 console.log( cars.splice(1,1,"gwagon") );
 console.log(cars);

 console.log( cars.sort() );



 

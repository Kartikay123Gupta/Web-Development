let pass = prompt("Enter your password");
let newPass = pass.trim();
console.log(newPass);
console.log(pass);

let str = "Random String";
console.log( str.toUpperCase() );
console.log( str.toLowerCase() );

let msg = "ILoveCoding";
console.log( msg.indexOf("Love") );
console.log( msg.indexOf("o") );
console.log( msg.indexOf("J") );

console.log( msg.slice(5) );
console.log( msg.slice(1,5) );
console.log( msg.slice(-4) ); //11-4= "7"

console.log( msg.replace("Love","do") );
console.log( msg.replace('o','x') );

console.log( msg.repeat(3) );

msg = "apnaapnaapna"
console.log( msg.replace("apna","college") );


str = "   hello  ";
console.log( str.trim().toUpperCase() );


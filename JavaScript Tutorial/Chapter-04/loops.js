// Multiplication

let n = prompt("Write your number");
n = parseInt(n);

for(let i=n; i<=n*10; i=i+n){
    console.log(i);
}

for(let count=1; count<=10; count++){
    console.log(count*n);
}
const prompt = require('prompt-sync')({sigint: true});

let num1 = Number(prompt("Please enter a number: > "));
let num2 = Number(prompt("Please enter a number: > "));

while(num1 % num2 !== 0){
    console.log(num1)
    num1++
}

console.log(num1 +  " is divisible by "  + num2)
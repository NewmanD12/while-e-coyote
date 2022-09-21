const prompt = require('prompt-sync')({sigint: true});

let num1 = Number(prompt("Please enter a number: > "));

let fibo_array = [0,1]

while (fibo_array.length < num1){
    let num_to_add = fibo_array[fibo_array.length - 1] + fibo_array[fibo_array.length - 2]
    fibo_array.push(num_to_add)
}

for(let num of fibo_array){
    console.log(num)
}

const prompt = require('prompt-sync')({sigint: true});

let user_entry = Number(prompt('Please enter your starting number: '))

let sum = user_entry

while(sum < 100){
    console.log(sum)
    sum = sum * 2
}

console.log(sum)

const prompt = require('prompt-sync')({sigint: true});

let user_entry = prompt('Please enter your string: ')

let sum = user_entry

while(sum.length < 10){
    console.log(sum)
    sum = sum + user_entry
}

console.log(sum)

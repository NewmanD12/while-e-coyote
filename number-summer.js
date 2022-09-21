const prompt = require('prompt-sync')({sigint: true});

sum = 0
not_done = true

while(not_done){
    entry = prompt('Add to your sum: ')
    if(entry === 'done' || entry === '0'){
        console.log('Those numbers sum to ' + sum)
        sum = 0  
        not_done = false
    }   else {
        sum += Number(entry)
    }
}

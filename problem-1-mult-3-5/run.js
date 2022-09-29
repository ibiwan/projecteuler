const max = process.argv[2]

let sum = 0

for(let i = 0; i < max; i++){
    if(!(i%3) || !(i%5)){
        sum += i
    }
}

console.log(sum)

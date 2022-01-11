let numbers = []

for(let i = 1; i <= 20; i++) {
    numbers.push(i)
}

const isPrime = (numb) => {
    for(let i = 2; i < numb; i++ ) {
        
        if(numb % i === 0) {
            return false
        }
    } 
    return true
        
}

const mapPrimes = (num) => ( { number: num, answer: isPrime(num) } )
let resultMap = numbers.map(mapPrimes)
console.log(resultMap)


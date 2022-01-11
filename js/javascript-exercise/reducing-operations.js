const numbers = [2,4,5,3]

const operations = {
    sum: (x, y) => x + y,
    subtraction: (x, y) => x - y,
    multiply: (x, y) => x * y,
    division: (x, y) => x / y,
}

for(let number of numbers) {
    let result = Object.entries(operations).reduce( (acc, [key, value]) => value(acc, 2), number)
    console.log(result)
}


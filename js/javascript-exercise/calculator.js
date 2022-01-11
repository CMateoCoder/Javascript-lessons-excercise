let numbers = Array.from({length:5}, (v, i) => i + 1)

const opera = (x, y) => {

    const sum         = () => x + y
    const subtraction = () => x - y
    const multiply    = () => x * y
    const division    = () => x / y
    
    return {
        sum: sum(),
        subtraction: subtraction(),
        multiply: multiply(),
        division: division(),
    }
}

const eachNumber = (fn) => (arr) => arr.map((num) => fn(num, 1))

let result = eachNumber(opera)(numbers)
console.log(result)

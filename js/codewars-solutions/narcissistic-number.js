const narcissistic = (value) => {    

    const numberToArray = value.toString().split('')
    const numbers = numberToArray.map(number => parseInt(number))

    const multiply = element => element ** numbers.length
    const sum = (acc, curr) => acc + curr

    const operations = numbers
                            .map(multiply)
                            .reduce(sum ,0)  
                            
    return (operations === value) ? true : false
}

console.log(narcissistic(153));
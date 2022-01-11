const squareDigits = (num) => {

    let numArr = num.toString().split('')

    let square = numArr.map( element => parseInt(element) ).map( element => element **2 ).join('')

    return parseInt(square)
}

console.log(squareDigits(3212))
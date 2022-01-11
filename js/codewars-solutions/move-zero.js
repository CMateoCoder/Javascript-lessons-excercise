const moveZeros = (arr) => {
    const separateElements = (element) => element !== 0
    const separateZeros = (element) => element === 0
    
    const noZero = arr.filter(separateElements)
    const zeros = arr.filter(separateZeros)

    return [...noZero, ...zeros]
}

let result = moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
console.log(result)
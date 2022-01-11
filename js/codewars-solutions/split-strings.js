const solution = (str) => {

    const arr = [...str]

    if((arr.length -1)%2 === 0) arr.push('_')

    const joiningWords = (letter, i) => {
        if(i%2 != 0) return arr[i-1] + letter
    }

    return arr
            .map(joiningWords)
            .filter(ele => ele !== undefined)   
}

console.log(solution('abc'));
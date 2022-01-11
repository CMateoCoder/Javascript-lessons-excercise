const digital_root = (n) => {

    let numToArr = n.toString().split('')
    
    const strToNum = ele => ele *1
    const sum = (acc, curr) => acc + curr

    if(numToArr.length === 1) return numToArr
                                            .map(strToNum)[0]

    const result = numToArr
                    .map(strToNum)
                    .reduce(sum)

    return digital_root(n = result)
}

console.log(digital_root(493193))
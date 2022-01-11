const duplicateCount = (text) => {
    let textLowerCase = text.toLowerCase().split('')
    const newObj = textLowerCase.map(ele => ({letter: ele}))

    let sum = 0

    const counting = (acc, curr) => {
        acc[curr.letter] = acc[curr.letter] || 0
        acc[curr.letter]++

        return acc
    }

    let group = newObj.reduce(counting, {})
    const entries = Object.entries(group)

    for(let [key, value] of entries) {
        if(value > 1) sum += 1
    }

    return sum

}

console.log(duplicateCount('indivisibility'))
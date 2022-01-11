const findMissingLetter = (array) => {

    let newAlphabet
    let letters = []

    const lower = ele => ele.toLowerCase()
    const upper = ele => ele.toUpperCase()
    
    const alpha = Array.from({length:26}, (e, i) => i + 65);
    const alphabet = alpha.map((ele) => String.fromCharCode(ele))
    
    const counting = (acc, curr) => {
        acc[curr.letter] = acc[curr.letter] || 0
        acc[curr.letter]++

        return acc
    }

    array[0] === array[0].toLowerCase() ? newAlphabet = alphabet.map(lower) : newAlphabet = alphabet.map(upper)
    
    // ['a','b','c','d','f']
    for(let j = 0; j < array.length; j++) {
        for(let i = 0; i < newAlphabet.length; i++) {
            if(newAlphabet[i] === array[j]) {
                letters.push(newAlphabet[i])
                break
            } else if(newAlphabet[j] !== array[i]) {
                letters.push(newAlphabet[i])
            }
        }
    }

    let group = letters
                .filter(ele => !array.includes(ele))
                .map(ele => ({letter: ele}))
                .reduce(counting, {})

    let result = Object.entries(group).map(([key, value]) => key)

    if(result.length === 1) {
        return result.join('')
    } else {
        return result[result.length - 1]
    }
}


console.log(findMissingLetter(['a','b','c','d','f']))

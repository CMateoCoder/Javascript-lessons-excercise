const main = (arg) => {
    
    const separate = (phrase) => phrase.split(' ');

    const capitalize = (word) => {
        const [firstLetter, ...restWord] = word.split('')

        return firstLetter.toUpperCase().concat(restWord.join(''))
    }

    const capitalized = (wordsArr) => wordsArr.map(capitalize)
    const joined = (mapArr) => mapArr.join(' ')

    return joined(capitalized(separate(arg)))

}

const result = main('look at the blue sky')
console.log(result)


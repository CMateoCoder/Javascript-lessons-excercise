const spinWords = (string) => {

    const split = string.split(' ')

    const reversing = (word) => {    
        let splitInsideReverse = word.split('')

        if(splitInsideReverse.length >= 5) {
            return splitInsideReverse.reverse().join('')
        } else {
            return word
        }
    }

    const map = split.map(reversing).join(' ')
    return map
}
        
let result = spinWords('I should visit E3 in New York someday')
console.log(result)
const anagrams = (word, words) => {
    const lettersToEvaluate = word.split('').sort().join('')
    const anagrams = []

    const sorted = words
                    .map(ele => ele.split('').sort().join(''))
                    .map((element => element === lettersToEvaluate))
                    
    for(let i = 0; i < sorted.length; i++) {
        if(sorted[i] === true) anagrams.push(words[i])            
    }

    return anagrams
}

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada', 'baba']))
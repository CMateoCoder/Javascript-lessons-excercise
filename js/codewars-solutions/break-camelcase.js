const solution = (string) => {
    const splited = string.split('')

    const identifier = (letter) => letter === letter.toUpperCase() ? [...' ', letter] : letter
    const concat = (acc, curr) => acc.concat(curr)

    const result = fnIdentifier => fnConcat => arr => arr
                            .map(fnIdentifier)
                            .reduce(fnConcat, [])
                            .join('')
                            
    return result(identifier)(concat)(splited)
}

console.log(solution('IWantToBreakCamelCase'));
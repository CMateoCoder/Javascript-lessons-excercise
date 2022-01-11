const reversed = [1,1].reverse()

const fibonacci = ([ value1, value2 ]) => {
    const value = value1 + value2
    reversed.unshift(value)

    if(reversed.length === 10) return reversed
    
    return fibonacci( reversed )
}

console.log(fibonacci( reversed ));
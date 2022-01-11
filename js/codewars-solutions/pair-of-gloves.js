const numberOfPairs = (gloves) => {

    let accumulator = 0

    const counting = (acc, curr) => {
        acc[curr] = acc[curr] || 0
        acc[curr]++

        return acc
    }

    const sumed = gloves.reduce(counting, {})

    for(let [fruit, pair] of Object.entries(sumed)) {
        accumulator += pair
        if(pair === 1) {
            return 0
        }
    }

    return Math.trunc(accumulator / 2)

}

let r = numberOfPairs(['gray','black','purple','purple','gray','black'])
console.log(r);
const isIsogram = (str) => {

    const strToArr = str.toLowerCase().split('')
    const arrToObj = strToArr.map(ele => ({letter: ele}))

    const reducing = (acc, curr) => {

        acc[curr.letter] = acc[curr.letter] || 0

        acc[curr.letter]++
        return acc
    }

    const comprobation = arrToObj.reduce(reducing, {})

    for(let [key, value] of Object.entries(comprobation)) {
        return (value > 1) ? false : true
    }
}
  
console.log(isIsogram('Dermatoglyphics'))
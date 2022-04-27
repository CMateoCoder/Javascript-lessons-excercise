const sumStrings = (a, b) => {
    let toVerify = (a.length > b.length) ? a.length : b.length
    let check = ''
    let acc = 0

    const turnNumbers = (arr) => arr.map(str => str * 1)

    const turnedA = turnNumbers([...a]).reverse()
    const turnedB = turnNumbers([...b]).reverse()

    const sumed = (x, y) => {
        if(!x && y) return y + 0 
        if(!y && x) return x + 0

        return x + y
    }

    const main = (i) => {
        const numA = turnedA[i]
        const numB = turnedB[i]

        let sumResult = sumed(numA, numB)

        if(acc !== 0) {
            sumResult += acc
            acc = 0
        }

        const splited = sumResult.toString().split('')

        if(splited.length > 1 && splited[0] !== 'N') {
            const toNumber = splited[0] * 1
            acc += toNumber
            check += splited[1]

            return main(i + 1)
        }

        check += sumResult
        if(i === toVerify -1) return;

        return main(i + 1)
    }

    main(0)
    return [...check].reduceRight((acc, curr) => acc += curr ,'')
}
    
console.log(sumStrings('35643179183975','143255412512'));
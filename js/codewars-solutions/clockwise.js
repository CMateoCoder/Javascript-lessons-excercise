let matrix =  [
    [1,2,3],
    [3,4,5],
    [7,6,5]
];
const rotate = (matrix, direction) => {

    const clockwise = (ele) => ele.reverse()

    const result = ( saved ) => {
        const eachElement = matrix
                            .map( array => array.splice(0, 1))
                            .reduce((acc, curr ) => [...acc, ...curr] ,[])

        saved.push(eachElement)
        
        if( matrix[matrix.length -1].length === 0 ) {
            return (direction === 'clockwise') ? saved.map(clockwise) : saved.reverse()
        } 

        return result(saved)
    }

    return result([])
}

let result = rotate(matrix, 'counter-clockwise')
console.log(result);
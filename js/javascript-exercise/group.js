// 

const a = [{id: 1, fruit: 'pera'}, {id: 2, fruit: 'manzana'},{id: 3, fruit: 'pera'},{id: 4, fruit: 'pera'}]

const b = [{id: 1, fruit: 'pera'}, {id: 2, fruit: 'manzana'},{id: 5, fruit: 'sandia'},{id: 6, fruit: 'melocoton'}]

const getFruit = (element) => element.fruit

const fruitsReducer1 = (acc, curr) => {
    if(!(curr.fruit in acc)) {
        acc[curr.fruit] = 1
    }
    else {
        acc[curr.fruit] += 1
    }
    
    return acc
}

const fruitsReducer = (acc, curr) => {
    
    acc[curr.fruit] = acc[curr.fruit] || 0
    
    acc[curr.fruit] += 1
    return acc
}

let result2 = a.reduce(fruitsReducer, {})


let afruits = a.map(getFruit)
let bfruits = b.map(getFruit)

const result = bfruits.filter(a => !afruits.includes(a))

console.log(result)


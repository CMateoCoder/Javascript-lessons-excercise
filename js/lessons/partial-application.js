let arr = [{name: 'Mateo', age: 16, id: 1}, {name: 'Irma', age: 33, id: 2}, {name: 'Pedro', age: 20, id: 4}]
let ages = [{name: 'Mateo', age: 16, id: 1}, {name: 'Sofia', age: 25, id: 3}]

const getProperties = (objeto) => ({name: objeto.name.toLowerCase(), id: objeto.id, age: objeto.age + 1})
const ageReducer2 = (acc, curr) => {
    acc = curr.age + acc
    return acc
}

const ageReducer = (acc, curr) => curr.age + acc
const filterByAge = (element) => element.age > 18

const sumaEdad1 = (filter ,datos) => datos
            .filter(filter)
            .map( getProperties )
            .reduce( ageReducer, 0)

const sumaEdad2 = (filter) =>{
    
    return (datos) => datos
            .filter(filter)
            .map( getProperties )
            .reduce( ageReducer, 0)
}

const sumaEdad = (filter) => (datos) => datos
            .filter(filter)
            .map( getProperties )
            .reduce( ageReducer, 0)

console.log(sumaEdad(filterByAge)(arr))


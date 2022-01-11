let countries = {
    ecuador: 14000000,
    argentina:35000000,
    brazil: 80000000,
    chile: 25000000,
}

let arrOfCountries = Object.entries(countries)

const increasing = (valor) => arrOfCountries.map( ([countries, people]) => ({[countries]: people + valor}))


let result = increasing(100)
console.log(result)
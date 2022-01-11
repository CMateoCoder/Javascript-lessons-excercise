
const wait = (name) => {
    return new Promise( (res, rej) => {
        setTimeout(() => {
            res(name)
        }, 1000)
    })
}

console.log(wait('mateo'))

const strToArr = (str) => str.split('')

const taking = (str) => str.toUpperCase()

const reverse = (arr) => arr.reverse()

let promiseName = wait('mateo')

promiseName
    .then(taking)
    .then(strToArr)
    .then(reverse)
    .then(console.log)




console.log(promise)

wait('mateo').then((a) => console.log(a))

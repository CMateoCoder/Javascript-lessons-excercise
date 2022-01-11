const {service} = require('./services')

const promiseUsers = service('https://jsonplaceholder.typicode.com/posts')
const promisePosts = service('https://jsonplaceholder.typicode.com/comments?postId=1')

const resultData = (result) => result.data

const baseFilter = (min) => (max) => (element) => element.userId > min && element.userId < max

const filterBetween = baseFilter(5)(20)

const filterById = posts => posts.filter(filterBetween)

const map = (arr) => arr.map(element => element.email)

const main = (promise) => promise
    .then(resultData)
    .then(filterById)
    .then(console.log)

main(promiseUsers)

const reduce = element => element.reduce(groupingUserId, {})

const numbersFilter = arr => arr.filter(element => element.userId )

const groupingUserId = (acc, curr) => {

    // curr.userId in acc ? acc[curr.userId] += 1 : acc[curr.userId] = 1

    acc[curr.userId] = acc[curr.userId] || 0 

    acc[curr.userId] = acc[curr.userId] + 1

    return acc
}

promiseUsers
    .then(resultData)
    .then(reduce)
    .then(b => {
        let objGroupUserId = {...b}
        console.log(objGroupUserId)
    })

promisePosts
    .then( resultData )
    .then(map)
    .then(a => {
        let arrEmails = [...a]
        console.log(arrEmails)
    })
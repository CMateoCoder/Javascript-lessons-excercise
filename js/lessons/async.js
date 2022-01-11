const {service} = require('./services')
const jsonUrl = service('https://jsonplaceholder.typicode.com/posts')
// const promiseUsers = service('https://jsonplaceholder.typicode.com/posts')
// const promisePosts = service('https://jsonplaceholder.typicode.com/comments?postId=1')

const resultData = (result) => result.data

// const reduce = element => element.reduce(groupingUserId, {})

// const numbersFilter = arr => arr.filter(element => element.userId )

// const groupingUserId = (acc, curr) => {

//     // curr.userId in acc ? acc[curr.userId] += 1 : acc[curr.userId] = 1

//     acc[curr.userId] = acc[curr.userId] || 0 

//     acc[curr.userId] = acc[curr.userId] + 1

//     return acc
// }

// const map = (arr) => arr.map(element => element.email)

// /*
// let objGroupUserId 
// promiseUsers
//     .then(resultData)
//     .then(reduce)
//     .then(b => {
//         objGroupUserId = {...b}
//         console.log(objGroupUserId)
//     })

// let arrEmails 

// promisePosts
//     .then( resultData )
//     .then(map)
//     .then(a => {
//         arrEmails = [...a]
//         console.log(arrEmails)
//     })

// */

// const main1 = async () => {
//     const result = await promisePosts
//     const datas =  resultData(result)
//     const resultMap = map(datas)
//     const emails = [...resultMap]
//     // console.log(emails)
// }

// const main = async () => {
//     const result = await promiseUsers
//     const data = resultData(result)
//     const userIdReducer = reduce(data)
//     const users = {...userIdReducer}
// }

// main()

// let result = Promise.all([promisePosts, promiseUsers])

// const reducingToArray = (arr) => arr.reduce((acc, curr) => acc.concat(curr) , []) 

// let map2 = (arr) => arr.map(element => element.userId) 

// const reducer = (arr) => arr.reduce((acc, curr) => [...acc, curr.data], [])

// // result
// //     .then((values) => values.reduce((acc, curr) => [...acc, curr.data], []))
// //     .then(reducingToArray)
// //     .then(map)
// //     .then(console.log)

// // filter

// const filterEmails = (arr) => arr.filter(element => element.email)
// const filterUserIds = (arr) => arr.filter(element => element.userId)

// const promiseAllAsyncAwait = async () => {
//     let promise = await result
//     let reducing = reducer(promise)
//     let together = reducingToArray(reducing)
//     let filteringEmails = filterEmails(together)
//     let filteringUsers = filterUserIds(together)
//     let grouping = reduce(filteringUsers)
//     let emails = map(filteringEmails)
//     let joiningUsersEmails = [...emails, {...grouping}]


//     console.log(reducing)
    
// }
// // promiseAllAsyncAwait()


const getting = async(url) => {

    const result1 = resultData(await url)
    
    const result = result1.filter(ele => ele.id > 25 && ele.id < 30)

    console.log(result);
}


getting(jsonUrl)
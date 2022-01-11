const people = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

const main = (arr) => {

    const getPeople = ele => ele.age

    const getVotes = (acc, curr) => {
        acc[curr.voted] = acc[curr.voted] || 0
        acc[curr.voted] += 1
        return acc
    }

    let young = arr.filter(y => y.age <= 25)
    let mid   = arr.filter(m => m.age >= 26 && m.age <= 35)
    let old   = arr.filter(o => o.age >= 36 && o.age <= 55)

    let youngVotes = young.reduce( getVotes, {})
    let youngPeople = young.map( getPeople)
    
    let midVotes = mid.reduce( getVotes, {})
    let midPeople = mid.map( getPeople)
    
    let oldVotes = old.reduce( getVotes, {})
    let oldPeople = old.map( getPeople)

    return  {   
                numYoungVotes: youngVotes.true,
                numYoungPeople: youngPeople.length,
                numMidVotes: midVotes.true,
                numMidPeople: midPeople.length,
                numOldVotes: oldVotes.true,
                numOldPeople: oldPeople.length
            }
}

let result = main(people)
console.log(result)
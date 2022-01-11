
let palindromo = 'Yo hago yoga hoy'

const verifying = (word) => {
    
    let str = word.split(' ').join('')
    const lower = (a) => a.toLowerCase()
    const split = (b) => b.split('')
    const reverse = (c) => c.reverse()
    const join = (d) => d.join('')
    
    let lowered = lower(str)
    let splited = split(lowered)
    let reversed = reverse(splited)
    let joined = join(reversed)
    
    return lowered === joined
};

const result = verifying(palindromo);
console.log(result)



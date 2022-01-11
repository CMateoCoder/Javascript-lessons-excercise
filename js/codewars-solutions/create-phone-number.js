const createPhoneNumber = (numbers) => `(${numbers.splice(0,3)}) ${numbers.splice(0, 3)}-${numbers.splice(0, 4)}`
                                        .split(',')
                                        .join('') 


console.log(createPhoneNumber([1,2,3,4,5,6,7,8,9,0]))
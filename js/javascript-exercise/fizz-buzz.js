let numbers = Array.from({length:30}, (v, i) => i + 1)

const main = () => {

    const withIf = (numbers) => {
        if(numbers %5 === 0 && numbers %3 === 0){
            return 'Fizz Buzz'
        } else if (numbers %3 === 0) {
            return 'Fizz'
        } else if (numbers %5 === 0) {
            return 'Buzz'
        } else {
            return numbers
        }
    }

    const withSwitch = (element) => {
        
        let xpr = 0
        let fizzBuzz = element %5 === 0 && element %3 === 0;
        let fizz = element %3 === 0;
        let buzz = element %5 === 0;

        switch(xpr === 0) {
            case fizzBuzz :
                return 'fizzBuzz'    
            case fizz:
                return 'fizz'
            case buzz:
                return 'buzz'
            default:
                return element
        }
    }

    return numbers.map(withIf)
};

let result = main(numbers)
console.log(result)
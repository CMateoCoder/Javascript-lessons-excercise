const ObjEdad = [
    {me: 'Mateo', age: 16},
    {uncle: 'Edgar', age: 35},
    {mom: 'Irma', age: 33},
    {Dad: 'Julio', age: 44},
    {grandma: 'Alicia', age: 65},
    {grandpa: 'Cristobal', age: 73},
    {sis: 'Romina', age: 6}
];

const newArrFuntion = (element) => element.age >= 18
let highAge = ObjEdad.filter( newArrFuntion );

console.log( highAge );
import { apiKey } from './util.js'
import key from "./util.js"
import * as util from "./util.js"
// console.log(apiKey)
// console.log(key)
// console.log(util.name)
// console.log(util.apiKey)
// console.log(util.default)

// functions

// function usedData(userName, message="hello"){
//     console.log(userName, message);
//     console.log()
// }

// usedData('mohammed', 'hello mohammed')
// usedData('Ali', 'hello Ali')
// usedData('ahmed', 'hello Ahmed')
// usedData('Alaa')

// object 

// const user = {
//     name: 'Mohammed',
//     age: 26,
//     greating() {
//         console.log(`hello ${this.name}`)
//     }
// }
// console.log(user);
// console.log(user.name);
// console.log(user.age);
// user.greating()

// classes 

// class User1 {
//     constructor(name, age){
//         this.name = name;
//         this.age = age
//     }
//     greating(){
//         console.log(`hello ${this.name} your age is ${this.age}`)
//     }
// }

// const userClass = new User1('Mohammed', 26);
// console.log(userClass.greating());
// console.log(userClass);

// function transformToObjects(numberArray) {
//     // Todo: Add your logic
//     // should return an array of objects
    
//     return numberArray.map((item) => ({val: item}))
 
// }
// console.log(transformToObjects([1, 2, 3, 4]));


// destruction

// const userData = ['Mohammed', 'Refaat'];

// const fName = usedData[0]
// const lName = usedData[1]

// instead of reaching the first and last name using indexes we can use descturct simply 

// const [fName, lName] = ['Mohammed', 'Refaat'];
// console.log(fName);
// console.log(lName);
// we can use the same way with object but in that case we have ti use the same name for the object in array I can pick any nam I choose

// const {name, age} = {
//     name: 'Mohammed',
//     age: 26
// }

// console.log(name);
// console.log(age)

const hoppies = ['sports', 'reading']
const newHoppy = ['cooking']

const mergedArrays = [...hoppies, ...newHoppy];
console.log(mergedArrays);

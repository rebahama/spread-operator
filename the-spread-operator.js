/**
 * To run this file in Gitpod, use the 
 * command node the-spread-operator.js in the terminal
 */


// No spread operator
let arr1=[4,3,2]
let arr2=arr1
arr2.push(6)
console.log(arr2)
console.log(arr1)
// Copying an array
let arr3=[7,8,9]
let arr4=[...arr3]
arr4.push(10)
console.log(arr3)
console.log(arr4)
// Copying an object
let obj1={a:1,b:2,c:3}
let obj2={...obj1,d:4}
console.log(obj1)
console.log(obj2)
// Copying only part of an array/object
let arr5=[...arr1,arr2,arr3,"x"]
console.log(arr5)






//Rest Parameter
/**
 * To run this file in Gitpod, use the 
 * command node rest-parameter-syntax.js in the terminal
 */

// Regular function call 

const SumAll=(a,b,c)=>a+b+c;
let sum=SumAll(3,3,3)
console.log(sum)
// Extra arguments are ignored
let sum2=SumAll(1,2,3,4,5,6,7,8)
console.log(sum2)

// Function using ...rest
const sumRest=(a,b,c, ...rest)=>{
    let sum=a+b+c;
    for (let i of rest){
        sum+=i
    }
return sum;
}

let newSum=sumRest(1,2,3,4,5,6,)
console.log(newSum)






/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring arrays
let ages=[30,60,70]
/*let john=ages[0]
let mary=ages[1]
let joe=ages[2]
*/
let [john,mary,joe]=ages
console.log(john,mary,joe)
// Destructuring objects
let jobs={
mike:"designer",
jill:"developer",
max:"accountant",
}
let{mike,jill,max}=jobs
console.log(mike,jill,max)
// Destructuring subsets
let languages=["english","spanish","german","france","japanese"]
let =[johnnative,secondJohn]=languages
console.log(johnnative,secondJohn)
let[, , , maryNative,marysecendory]=languages
console.log(maryNative,marysecendory)
// Using rest parameter syntax

let lanugestwo={
firstlanugage:"english",
secondlanugage:"spanish",
thirdlanugage:"german",
fourthlanugage:"france"
}
let {firstlanugage,secondlanugage}=lanugestwo
console.log(firstlanugage,secondlanugage)

let person={
    brian:"pizza",
    chris:"pasta",
    abby:"rice",
    steve:"steak",
}
let {brian,chris, ...rest}=person
console.log(brian)
console.log(chris)
console.log(rest)
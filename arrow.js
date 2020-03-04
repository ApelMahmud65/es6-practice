
// function doubleIt(num){
//     return num * 2;
// }


// const doubleIt = function myFun(num){
//     return num *2;
// }

const doubleIt = num => num*2;
const add = (a,b) => a+b;
const giv5 = () => 5;
const result = giv5();

const doMath = (a,b) =>{
    const sum = a + b;
    const diff = a - b;
    const result = sum * diff;
    return result;
}

const result3 = doMath(10,2);
console.log(result3);


// // rest Operator

// // without Rest Operator

// function whtRest(a, b, c){
//     console.log(a + b + c);
// }

// whtRest(1,2,3)

// // With Rest Operator

// function wtRest(a, ...numbers){
//     console.log(a, numbers)
// }

// // wtRest(1,2,3,4,5);

// let arr = [1,2,3,4,5]
// let arr1 = [12,23,34]
// wtRest(157, arr, arr1)





// function sum (a, b, c, ...numbers){
//     let arr = a + b + c;
//     let arrSum = arr.reduce((acc, curr) =>{
//         return acc + curr
//     })
//     console.log(arrSum)
// }

// console.log(sum(1,2,3,4,5,6,7,8,9,10));


// Object Destructuring with REst 
let obj = {
    name: "majid",
    age : 19,
    city : "Karachi"
}

// let {name , ...rest} = obj;
// console.log(name)
// console.log(rest)


// Spread Operator

let arr1 = [1,2,3];
let arr2 = [...arr1];
arr1.splice(0,2, "game")
console.log(arr1);
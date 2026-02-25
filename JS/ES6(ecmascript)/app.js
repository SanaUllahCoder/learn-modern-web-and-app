
// // DEFAULT PARAMETERS

// function test(a = 3, b = 34, c = 34){
//     return a + b + c;
// }

// console.log(test(1,2,3));


// // FIRST CLASS FUNCTION

// let fcfn = function (){
//     console.log("heelo game") 
// }
// fcfn()

// // EXAMPLES 

// function exp(){
//     console.log('hello')
// }

// function callexp(hofn){
//     hofn()
// }

// callexp(exp)


// function outer(){
//     return(function(){
//         console.log('heelo bro')
//     })

// }

// let result = outer()
// result()


// // HIGH ORDER FUNCTION 

// function hofn(a, b, operation){
//     return operation(a,b);

// }

// function add(x,y){
//     return x + y;
// }

// console.log(hofn(2,4, add))



// CALLBACK FUNCTION

function callBackFn(position){
    console.log("Sana Ullah Siddiqui " + position )
}

function callBackFn1(callBack){
    let position = "Frontend Developer";
    callBack(position)
}

callBackFn1(callBackFn)

// Example of callback function
function sum(a, b, callback){
    return callback(a, b)
}
function add(a, b){
    return a + b;
}
console.log(sum(1,2, add))  

// Example 2 of callback function
let callBackExample = (name) => {
   console.log(`Hello ${name}`);
}

let callBackExamplefn = (callback) => {
   let username = "Saylani";
   callback(username)
};

callBackExamplefn(callBackExample);
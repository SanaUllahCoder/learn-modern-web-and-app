
// DEFAULT PARAMETERS

function test(a = 3, b = 34, c = 34){
    return a + b + c;
}

console.log(test(1,2,3));


// FIRST CLASS FUNCTION

let fcfn = function (){
    console.log("heelo game") 
}
fcfn()

// EXAMPLES 

function exp(){
    console.log('hello')
}

function callexp(hofn){
    hofn()
}

callexp(exp)


function outer(){
    return(function(){
        console.log('heelo bro')
    })

}

let result = outer()
result()


// HIGH ORDER FUNCTION 

function hofn(a, b, operation){
    return operation(a,b);

}

function add(x,y){
    return x + y;
}

console.log(hofn(2,4, add))
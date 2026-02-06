// mostly use this function

// 1. includes
// 2. map
// 3. find
// 4. reduce
// 5. foreach



// map
let newData = [
    {
        name : "Sana Ullah Siddiqui",
        age : 19,
        id: 3,
    },
    {
        name : "Matti Ullah Siddiqui",
        age : 2,
        id: 9,
    }
];

let checker = newData.map((data, index)=>{
    console.log(data.name);
    if(data.age > 18){
        console.log("you are able")
    }else{
        console.log("you are not able")
    }
}
);


// filter 
let fltrChecker = newData.filter((data) => data.age > 18)
console.log(fltrChecker);


// reduce 
let arr = [1,2,3,4,5]

let rduChecker = arr.reduce((acc, current) =>{
    return acc * current;
});
console.log(rduChecker);

// forEach

let fehChecker = newData.forEach((data) =>{
    console.log(data.age)
})
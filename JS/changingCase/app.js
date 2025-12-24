
var myName = 'Sana Ullah Siddiqui';
var changeCase = myName.toLocaleLowerCase();
document.write(changeCase);

// var userInput = prompt('enter the name');
// var changeCase = userInput.toUpperCase();
// console.log(changeCase);


var userInput1 = prompt("enter the name")
var firstLetter = userInput1[0].toUpperCase();
var remainLetters = userInput1.slice(1).toLowerCase();

console.log('firstLetter', firstLetter);
console.log('remainLetters', remainLetters)

var concatenate = firstLetter + remainLetters;
if(myName === concatenate){
    alert('yes')
}else{
    alert('no')
}
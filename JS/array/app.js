// var fruits = ["banana", 'mango', 'apple', 'kiwi'];
// console.log('Before pop',fruits);

// fruits.pop();
// console.log('After pop', fruits)

// fruits.push('pear', 'kiwi', 'orange')
// console.log('After push 3 Fruits', fruits)

// var vegetables = ['cucumber', 'ladyfinder', 'potato']
// vegetables.shift();
// console.log('After shift', vegetables);

// vegetables.unshift()
// console.log('tomato', 'onion', vegetables)

var cities = ['Karachi', 'Islamabad', 'Lahore', 'Murre', 'Multan', 'Murree', 'Swat'];

var userInput = prompt('enter city name');
var isValid = false;

for(var i = 0; 1 < cities.length; i++){
    if(userInput.toLowerCase !== cities[i].toLowerCase){
        alert('yes it is ');
        isValid = true;
    }else {
        alert('no')
    }
}
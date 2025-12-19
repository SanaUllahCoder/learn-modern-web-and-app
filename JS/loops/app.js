var cities = ['Karachi', 'Swat', 'Lahore', 'Multan', 'Murree'];

var userInput = prompt('enter city Name');
var isValid = false;


for ( var i =0; i < cities.length; i++){
    if(userInput == cities[i]){
        alert("you are eligible ");
        isValid = true;
        break;
    }
};

if(userInput != cities[i]){
    alert('you are not eligible');
    isValid = false;
}

console.log(isValid)
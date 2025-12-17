
// Loops

// for loop

for( var i = 0; i <= 10; i++){
    document.write(i + ' hello' + '<br>')
}

for( var i = 10; i >= 0; i--){
    document.write(i + ' hello' + '<br>')
}

var arr = ['ferri' , 'bugatti', 'lexus' , 'bently', 'landcruiser']

for (var i = 0 ; i <= arr.length; i++){
    document.write(arr[i] + '<br>')
}

for (var i = 1; i <= 10; i++){
    document.write(2 + 'x' + i  + '=' +2 * i + '<br>')
}

var userInput = +prompt()
var userresult = +prompt()

for (var i = 1; i <= userresult; i++){
    if (userInput && userresult >= 1){
    document.write(userInput + 'x' + i  + '=' +userInput * i + '<br>')
    }else{
        alert('please enter valid number')
    }
}
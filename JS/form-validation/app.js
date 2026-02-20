// TOPIC 
// Form validation: drop-downs

function checkForSelection() {
    if (document.getElementById("states").selectedIndex === 0) {
        alert("Please select a state.");
        return false;

    }
}

// TOPIC 
// Form validation: radio buttons

function validateRadios() {
    var radios = document.getElementsByName("r1");
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            return true;
        }
    }
    alert("Please check one.");
    return false;
}


// TOPIC 
// Form validation: ZIP codes

function validateZIP() {
    var numChars = document.getElementById("zip").value.length;
    if (numChars < 5) {
        alert("Please enter a 5-digit code.");
        return false;
    }
}

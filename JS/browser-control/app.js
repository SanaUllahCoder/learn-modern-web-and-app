
// TOPIC
// Browser control:Filling the window with content

// let newWin = window.open();
// console.log(newWin)



// let newWindow = window.open();
// var content = `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
// Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>`;
// newWindow.document.writeln(content);


// TOPIC
// Browser control:Controlling the window's size and location
// var ltnPath = window.open("monk.html", "win1", "width=420,height=380");

// let ltn = window.open('', 'win1');

// TOPIC
// Browser control:Testing for popup blockers

// function checkForPopBlocker() {
// var testPop = window.open("", "","width=100,height=100");
//  if (testPop === null) {
//  alert("Please disable your popup blocker.");
// }
//  testPop.close();
// }

function checkForPopBlocker() {
    var testPop = window.open("", "", "width=100,height=100");
    if (testPop === null || typeof (testPop === "undefined") {
        alert("Please disable your popup blocker.");
    }
    testPop.close();
}
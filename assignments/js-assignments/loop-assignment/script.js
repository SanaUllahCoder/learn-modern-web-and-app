

// Q 1: What are the 5 characters missing from this code, excluding any spaces that are missing? Type them in order, with no spaces or commas between them.
// for var i = 0 i <= 4 i++

// ans: (;;){

// Q2: Use the conventional counter name and the usual count start to fill in the blank.
// for (_________; i <= 4; i++) {
// ans: var i = 0

// Q3: The loop is to run 10 times. Fill in the blank, using either of the 2 acceptable ways to specify the number of loops.
// for (var i = 0; _____; i++) {

// ans: i < 10;

// Q4: The counter is to increment after each loop. Fill in the blank.
// for (var i = 0; i <= 9; ____) {

// ans: i++


// Q5: Code the first 15 characters of a for loop with the usual counter name and usual starting value.

// ans: for (var i = 0;

// Q6: Code the first line of a for loop with the usual counter name, usual starting value, and usual increment. Run it 12 times using <= to specify how many loops.

// ans: for (var i = 0; i <= 11; i++) {

// Q7: Code the first line of a for loop with the usual counter name, usual starting value, and usual increment. Run it 4 times using < to specify how many loops.

// ans: for (var i = 0; i < 4; i++) {

// Q8: Code the first line of a for loop with a counter name that's not i. Code the usual starting value and usual increment. Run it 100 times using < to specify how many loops.

// Ans: for (var j = 0; j < 100; j++) {

// Q9 : Code the first line of a for loop with the usual counter and the usual starting value. Run it 3 times using > to specify how many loops. Decrement it with each iteration.

// ans: for (var i = 3; i > 0; i--) {

// Q10: Code a loop using the usual conventions and < that displays an alert containing a string 50 times.

// ans: for (var i = 0; i < 50; i++) {
//     alert("This is alert number " + (i + 1));
// }



// Chapter 19

// Q1 In one word, what is a flag?
// ans: boolean

// Q2: What is the keyword that stops a loop from continuing to loop?

// ans: break

// Q3: There are two Booleans. Name either one of them.
// ans: true or false

// Q4: he statement assigns the number of elements in the array to the variable. Fill in the blank.
// var num = generals.________;

// ans: length

// Q5: Find the number of elements in the array cities and assign the number to the variable numCities, which hasn't been declared beforehand.

// ans: var numCities = cities.length;

// Q6: Code two lines. The first line reverses the flag x, which was originally set to the positive Boolean. The second line stops the looping.

// ans: x = false;
// break;

// Q7: Set a flag with an initial Boolean value of your choice.

// ans: var flag = true;

// Q8: Find the number of elements in an array and assign the number to a variable, which hasn't been declared beforehand.
// ans: var numElements = arrayName.length;


// Q9: Code the first line of a for loop with the usual counter, the usual starting value, and the usual incrementing. Limit the number of loops by the number of elements in the array pets.
// ans: for (var i = 0; i < pets.length; i++) {


// Chapter 20

// Q1:If an outer loop runs 3 times and an inner loop runs 5 times, how many times will the inner loop iterate? Answer with a numeral.
ans: 15

// Q2: The outer loop and inner loop can't share the same ______. Answer with one word.
// ans: counter


// Q3: What's missing from this code? Answer with a 6-letter word that starts with "i".
// for (var i = 0; i <= array1Length; i++) {
// for (var j = 0; j < array2Length; j++) {
//   sumOfCounters = i + j;
// }
// }

// ans: increment


// Q4: In the following nonsensical code, how many times will the outer loop execute? Answer with a numeral.
// for (var i = 0; i < 3; i++) {
//   for (var j = 0; j < 10; j++) {
//     if (j >= 1) {
//       break;
//     }
//   }
// }

// ans: 3

// Q5 : Code nested loops. Use i and j as counters. The outer loop runs 3 times. The inner loop runs 3 times each time the outer loop iterates. Use <. With each iteration of the inner loop, an alert displays showing the sum of the two counters.
// ans: 
// for (var i = 0; i < 3; i++) {
//   for (var j = 0; j < 3; j++) {
//     alert(i + j);
//   }
// }


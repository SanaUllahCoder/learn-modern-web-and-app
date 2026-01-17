

// Q1: 
var city0 = "Atlanta";
var city1 = "Baltimore";
var city2 = "Chicago";
var city3 = "Denver";
var city4 = "Los Angeles";
var city5 = "Seattle";

alert("Welcome to " + city3);

// Answer: output "Welcome to Denver"

// Q2:
 var cities = ["Atlanta", "Baltimore", "Chicago", "Denver", "Los Angeles", "Seattle"];
alert("Welcome to " + cities[3]);

// Answer : output "Welcome to Denver"

// Q3: 
var mixedArray = [1, "Bob", "Now is", true];

Answer: document.write(mixedArray);

// Q4: 
var pets = [];
pets[0] = "dog";
pets[1] = "cat";
pets[2] = "bird";
Answer: ["dog", "cat", "bird"];

// Q5: 
pets[3] = "lizard";
pets[6] = "snake";
Answer: ["dog", "cat", "bird", "lizard", undefined, undefined, "snake"];

// Q6: 
pets[3] = "lizard";
pets[4] = "fish";
pets[5] = "gerbil";
pets[6] = "snake";
Answer: ["dog", "cat", "bird", "lizard", "fish", "gerbil", "snake"];

// Q7: 
pets.pop();
Answer: ["dog", "cat", "bird", "lizard", "fish", "gerbil"];

// Q8: 
pets.push("fish", "ferret");
Answer: ["dog", "cat", "bird", "lizard", "fish", "gerbil", "fish", "ferret"];

// Q9: 
pets.shift();
Answer: ["cat", "bird", "lizard", "fish", "gerbil", "fish", "ferret"];

// Q10: 
pets.unshift("fish", "ferret");
Answer: ["fish", "ferret", "cat", "bird", "lizard", "fish", "gerbil", "fish", "ferret"];

// Q11
pets.splice(2, 2, "pig", "duck", "emu");
Answer: ["fish", "ferret", "pig", "duck", "emu", "lizard", "fish", "gerbil", "fish", "ferret"];

// Q12: 
pets.splice(2, 0, "pig", "duck", "emu");
Answer: ["fish", "ferret", "pig", "duck", "emu", "cat", "bird", "lizard", "fish", "gerbil", "fish", "ferret"];

// Q13: 
pets.splice(2, 2);
Answer: ["fish", "ferret", "lizard", "fish", "gerbil", "fish", "ferret"];

// Q14: 
var noPets = pets.slice(2, 4);
Answer: ["lizard", "fish"];


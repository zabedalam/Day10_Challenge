//  21) Given variable X = "John" and Y = "Doe", write on the console log "John <> Doe"
//  22) Create an object with properties such Name, Surname, Email
//  23) Delete Email from the previously created object
//  24) Create an array with 10 strings in it
//  25) Print in the console every string in the previous array
//  26) Create an array with 100 random numbers in it
//  27) Wrote a function to get the MAX and the MIN from the previously created array
//  28) Create an array of arrays, in which every array has 10 random numbers
//  29) Create a function that gets 2 arrays and returns the longest one
//  30) Create a function that gets 2 arrays of numbers and returns the one with the higher sum of values


//21) Given variable X = "John" and Y = "Doe", write on the console log "John <> Doe"
var X = "John"
var Y = "Doe"
console.log(X + " " + "<>" + " " + Y)

//  22) Create an object with properties such Name, Surname, Email
var studentInfo = {
    Name: "Zabedul",
    Surname: "Alam",
    Email: "zabedalam777@gmail.com"
}

//23) Delete Email from the previously created object
delete studentInfo.Email
// console.log(studentInfo)

//  24) Create an array with 10 strings in it
var studentArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]
// console.log(studentArray)

//  25) Print in the console every string in the previous array
for (var i = 0; i < studentArray.length; i++) {
    console.log(studentArray[i])
}

//  26) Create an array with 100 random numbers in it

var newArr = []
while (newArr.length < 100) {
    var rnd = Math.floor(Math.random() * 100);
    newArr.push(rnd);
}
console.log(newArr);


// var makeARandomNumber = function () {
//     return Math.floor(Math.random() * 100);
// }
// var randoms = Array(100).fill(0).map(makeARandomNumber);
// console.log(randoms)

// 27) Wrote a function to get the MAX and the MIN from the previously created array
function maxValue() {
    console.log(Math.max(...newArr))
    return
}


function minValue() {
    console.log(Math.min(...newArr))
    return
}

//  28) Create an array of arrays, in which every array has 10 random numbers

values = [];
while (values.length < 10) {
    var rnd = Math.floor(Math.random() * 10);
    values.push([rnd])
};
console.log(values)

// 29) Create a function that gets 2 arrays and returns the longest one







// DOM 

// 31) Get element with ID "container" from the page
// 32) Get every "td" from the page
// 33) Create a cycle that prints the text inside every td of the page
// 34) Write a function to change the heading of the page
// 35) Write a function to add an extra row to the table
// 36) Write a function to add the class "test" to reach row in the table
// 37) Write a function to add a red background to every link in the page
// 38) Console log "Page loaded" when the page is correctly loaded
// 39) Write a function to add new items to a UL
// 40) Write a function to empty a list

// 31) Get element with ID "container" from the page
document.querySelector("#container")

// 32) Get every "td" from the page
document.querySelectorAll("td")

// 33) Create a cycle that prints the text inside every td of the page











// EXTRA 

//         41) Add an eventListener to alert when the mouse is over a link, displaying the URL
//         42) Add a button to hide every image on the page
//         43) Add a button to hide and show the table from the page
//         44) Write a function to sum every number inside the TD (if the content is numeric)
//         45) Delete the last letter from the title each time the user clicks on it
//         46) Change the a single TD backgrund color when the user clicks on it
//         47) Add a button DELETE, on click it should delete a random TD from the page
//         48) Add a pink border to a cell when the mouse is over
//         49) Write a function to add a table with 4 rows and 3 lines programmatically
//         50) Write a function to remove the table from the page
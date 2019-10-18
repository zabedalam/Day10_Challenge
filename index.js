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
var newArray = []
for (var i = 0; i < 100; i++) {

    newArray[i] = Math.floor(Math.random() * 100)
    console.log(newArray)

}

// var makeARandomNumber = function () {
//     return Math.floor(Math.random() * 100);
// }
// var randoms = Array(100).fill(0).map(makeARandomNumber);
// console.log(randoms)

// 27) Wrote a function to get the MAX and the MIN from the previously created array
function maxValue() {
    console.log(Math.max(...newArray))
    return
}

function minValue() {
    console.log(Math.min(...newArray))
    return
}

//  28) Create an array of arrays, in which every array has 10 random numbers
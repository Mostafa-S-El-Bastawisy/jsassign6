/*
  Array Challenge
*/

let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// Write Code Here
++zero;
--counter;
my.reverse().splice(--zero, counter++);
console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"];

console.log(my.slice(++zero, counter)); // ["Elham", "Mazero"]

console.log(
  my.slice(zero, counter)[--zero].slice(zero++, counter - zero) +
    my.slice(zero, counter)[zero++].slice(zero--)
); // "Elzero"

console.log(my[++zero][++counter] + my[zero--][++counter].toUpperCase()); // "rO"

/*
  Array Assignment 
*/

let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
myFriends.pop()
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];


// Method 2
myFriends.length = num;
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];


let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here
friends.pop()
friends.shift()
console.log(friends); // ["Eman", "Osama"]


let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code
finalArr = finalArr.concat(arrOne, arrTwo ).sort().reverse()
console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[2][0].slice(2).toUpperCase()); // ZERO

let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions

haystack = haystack.concat(needle);
console.log(haystack);

console.log(haystack.concat(needle))

haystack.includes(needle);
console.log(haystack)

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here
allArrs = allArrs
  .concat(arr1.slice(arr1.length - true), arr2.slice(arr1.length - true))
  .sort()
  .join("")
  .toLowerCase();

console.log(allArrs); // fxy
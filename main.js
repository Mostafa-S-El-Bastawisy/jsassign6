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


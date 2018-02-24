// console.log("hello .filter() exercise!");
let vals = [5,4,9,2, undefined, 1];

// returns true if you want to keep the value in new array, returns false if you want to leave it out 

function isEven(num) {
    if(num % 2 == 0){
        return true;
    } else {
        return false;
    }
}

// shorter version of this
function isEven(num){
    return (num % 2 == 0);
}

// will return the even numbers 
let answer = vals.filter(isEven);
console.log("shorter version answer", answer);

// es6 version of this
let evenNums = vals.filter(num => (num % 2 == 0));
console.log("evenNums using es6 arrows and filter", evenNums);

let oddNums = vals.filter(num => (num % 2 == 1));
console.log("odd numbers in array: ", oddNums);

let falsy = vals.filter(x => (x = !x));
let truthy = vals.filter(x => (x = x));
console.log("truthy", truthy);
console.log("falsy", falsy);

// filter out spaces in an array of words 
let s = "It was a dark and stormy night ";
let words = s.split(/\W+/).filter(word => word.length);
console.log("words", words);

















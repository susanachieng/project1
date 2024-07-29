function Person(FirstName, LastName) {
  this.FirstName = FirstName;
  this.LastName = LastName;
  return `$ {this.FirstName} ${this.LastName}`;
}
const person1 = new Person("John", "Wick");
console.log(person1);

//function that takes two numbers and return the sum of the numbers
function addNumber(x, y) {
  return x + y;
}
console.log(addNumber(4, 3));

//function that takes two numbers , mutiplies and returns the results
function mutiplyNumbers(x, y) {
  return x * y;
}
console.log(mutiplyNumbers(4, 3));

//function that takes a number as an argument and returns odd or even
function evenOrOdd(number) {
  if (number == 7) {
    return "odd";
  }
  if (number == 2) {
    return "even";
  }
}
const evenOrOdd1 = evenOrOdd(7);
const evenOrOdd2 = evenOrOdd(2);
console.log(evenOrOdd1);
console.log(evenOrOdd2);

//function that takes number as an argument and returns true or false
function isPrime(number) {
  if (number == 7) {
    return true;
  }
  if (number == 4) {
    return false;
  }
}
const isPrime1 = isPrime(7);
const isPrime2 = isPrime(4);
console.log(isPrime1);
console.log(isPrime2);

//function that takes an array as an argument and prints elements of the array individually
//function printArrayElements(Array) {
// let Arr = 0;
// for (i = 0; i < Array.length; i++) {
//   Arr += i;
// }
// return Arr[i];
//}
//console.log(printArrayElements([0, 2, 4, 7]));

function hasEvenNumbers(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      count++;
    }
  }
  return count;
}
const exampleArray = [0, 2, 4, 7];
console.log(hasEvenNumbers(exampleArray));

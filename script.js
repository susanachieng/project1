// console.log(document.domain);
// console.log(document.URL);
// console.log(document.getElementById(" deposit button"));
// var depositButton = document.getElementById(" deposit button");
// depositButton.style.backgroundColor = blue;
// var transaction = document.querySelector(".transaction");
// console.log(transaction);
// transaction.innerText = "list transaction";
// transaction.computedStyleMap.color = "blue";

function hasPrimeNumbers(arr) {
  let count = 0;
  for (let i = 0; i <= arr.length; i++)
    if (arr[i] % 2 !== 0) {
      count++;
    }
  return count;
}
// const exampleArray = [0, 2, 4, 7];
console.log(hasPrimeNumbers([0, 2, 4, 7]));

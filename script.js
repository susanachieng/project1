// console.log(document.domain);
// console.log(document.URL);
// console.log(document.getElementById(" deposit button"));
// var depositButton = document.getElementById(" deposit button");
// depositButton.style.backgroundColor = blue;
// var transaction = document.querySelector(".transaction");
// console.log(transaction);
// transaction.innerText = "list transaction";
// transaction.computedStyleMap.color = "blue";
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function hasPrimeNumbers(arr) {
  let count = 0;
  for (const num of arr)
    if (isPrime(num)) {
      count++;
    }
  return count;
}
const arr = [0, 2, 4, 7];
console.log(hasPrimeNumbers(arr));

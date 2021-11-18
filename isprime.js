function sum_of_first_n_prime_numbers(n) {
  let sum = 0
  for (i = 0; i <= n; i++) {
    if (isPrime(i)) {
      sum += i
    } else {
      sum = sum
    }
  }
  return console.log(sum)
}

function isPrime(num) {
  var sqrtnum = Math.floor(Math.sqrt(num))
  var prime = num != 1
  //Application of prime number theory
  for (var i = 2; i < sqrtnum + 1; i++) {
    // sqrtnum+1
    if (num % i == 0) {
      prime = false
      break
    }
  }
  return prime
}

sum_of_first_n_prime_numbers(100);

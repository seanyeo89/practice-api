//telling node to include express package so that I can use it later in the file
const express = require('express');

function sum_of_first_n_prime_numbers(n) {
  let sum = 0
  for (i = 0; i <= n; i++){
    if (isPrime(i)) {
      sum += i;
    }
    else {
      sum=sum;
    }
   }
    return sum
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

console.log(sum_of_first_n_prime_numbers(100))

//export the function as an API to get sum of first n natural numbers
const port = 3000
let server = express()
//whenever client makes a request, with an API Path. Map the string to a function in node.js
let router = express.Router()
//API path and call back function with 2 inputs
router.get('/sum/first-n-prime-numbers', (request, response) => {
  //get parameter n from request
  let n = request.query.n
  //perform function
  let sum = sum_of_first_n_prime_numbers(n)
  //return sum as response;
  response.status(200).send('Hello World!Sum of first n prime: ' + sum);
})
//port

//Use the router
server.use(router)
server.listen(port, (error) => {
  if (error) {
    console.log(error)
  } else {
    console.log('Server running at port 3000')
  }
})

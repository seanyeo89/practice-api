//telling node to include express package so that I can use it later in the file
const express =require("express");

function add(a,b){
 return a+b;
}

function sum_of_first_n_numbers(n){
 let sum=0;
 for(i =0;i<=n;i++){
  sum+=i;
 }
 return sum;
}

console.log(sum_of_first_n_numbers(100));

//export the function as an API to get sum of first n natural numbers
const port=3000;
let server =express();
//whenever client makes a request, with an API Path. Map the string to a function in node.js
let router=express.Router();
//API path and call back function with 2 inputs
router.get("/sum/first-n-numbers",(request,response)=>{
  //get parameter n from request
  let n=request.query.n;
  //perform function
  let sum=sum_of_first_n_numbers(n);
  //return sum as response;
  response.status(200).send("Sum is: " + sum);
 }
);
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
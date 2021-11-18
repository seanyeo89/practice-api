const express = require('express')

const user_mapping = require('./mappings/user')
const account_mapping = require('./mappings/account')

let server=express();
//purpose of express.json
//You DO NOT NEED express.json() and express.urlencoded() for GET Requests or DELETE Requests.

//You NEED express.json() and express.urlencoded() for POST and PUT requests, because in both these requests you are sending data (in the form of some data object) to the server and you are asking the server to accept or store that data (object), which is enclosed in the body (i.e. req.body) of that (POST or PUT) Request
server.use(express.json())

//express.json() is a method inbuilt in express to recognize the incoming Request Object as a JSON Object. This method is called as a middleware in your application using the code: app.use(express.json())

server.use(user_mapping.router);
server.use(account_mapping.router);

server.listen(3000, (error) => {
  if (error) {
    console.log(error)
  } else {
    console.log('Server running at port 3000')
  }
})
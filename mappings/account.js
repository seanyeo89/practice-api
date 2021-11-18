const express = require('express')
const database = require('../data')

let router = express.Router()
//database.get_all_users is a function from database file
router.get('/accounts/all', (request, response) => {
  let accounts = database.get_all_accounts()
  response.status(200).send(accounts)
})

router.get('/account/by-id', (request, response) => {
  let account = database.get_account_by_account_id(request.query.account_id);
  if (account) {
  response.status(200).send(account)
  }
  else {
    response.status(404).send('account not found')
  }
})

module.exports = { router }

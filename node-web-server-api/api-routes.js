// Libraries
var express = require('express')
var router = express.Router()

// SQLite3 Library (https://github.com/mapbox/node-sqlite3/wiki/API)
var sqlite3 = require('sqlite3').verbose()
var db = new sqlite3.Database('./store.sqlite3')

// Routes
router.get('/users', function (req, res) {
  db.serialize(function () {
      db.all('SELECT * from USERS', (error, rows) => {
        if (req.query.format === 'html') {
          res.render('users.html', {
            users: rows
          })
        } else {
          res.json(rows)
        }
      })
  })
})
router.get('/addresses', function (req, res) {
  db.serialize(function () {
      db.all('SELECT addresses.id, users.first_name, users.last_name, addresses.street, addresses.city, addresses.state, addresses.zip from ADDRESSES INNER JOIN USERS on addresses.user_id=users.id', (error, rows) => {
        if (req.query.format === 'html') {
          res.render('addresses.html', {
            addresses: rows
          })
        } else {
          res.json(rows)
        }
      })
  })
})
router.get('/items', function (req, res) {
  db.serialize(function () {
      db.all('SELECT * from ITEMS', (error, rows) => {
        if (req.query.format === 'html') {
          res.render('items.html', {
            items: rows
          })
        } else {
          res.json(rows)
        }
      })
  })
})
router.get('/orders', function (req, res) {
  db.serialize(function () {
      db.all('SELECT orders.id, users.first_name, users.last_name, items.title, orders.quantity, orders.created_at from USERS INNER JOIN ORDERS on users.id=orders.user_id INNER JOIN ITEMS on items.id=orders.item_id', (error, rows) => {
          if (req.query.format === 'html') {
            res.render('orders.html', {
              orders: rows
            })
          } else {
            res.json(rows)
          }
      })
  })
})


module.exports = router

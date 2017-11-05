const mongoose = require('mongoose');
const express = require('express');
const app = express()
const fs = require('fs');
const path = require('path');
const port = process.env.PORT || 8000
const bodyParser = require('body-parser');
const session = require('express-session');
const randomatic = require('randomatic');
const MongoStore = require('connect-mongo')(session)

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// connect to mongodb
mongoose.connect('mongodb://localhost/ioshaven', {
  useMongoClient: true
})


// use sessions for tracking logins
secret = randomatic('Aa0!', 24)
app.use(session({
  secret: 'secret szechuan sauce',
  resave: false,
  saveUninitialized: false,
  store: new MongoStore({
    mongooseConnection: mongoose.connection,
    ttl: 14 * 24 * 60 * 60, //14 days
    touchAfter: 24 * 3600
  })
}))
mongoose.Promise = global.Promise



// enable cross Origin
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Credentials", true)
  next();
});

// automatically require all the routes
fs.readdirSync(path.join(__dirname, 'routes/')).forEach(file => {
  app.use('/'+file.split('.')[0], require('./routes/'+file))
})

// start the server then display a message.
app.listen(port)
console.log("\x1b[42m", "\x1b[30m", `API up and running on port ${port}!`, "\x1b[0m")

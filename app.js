const express = require('express')
const app = express()
const router = require('./routes/v1')
const passport = require('passport')
const session = require('express-session')
const bodyParser = require('body-parser')
const auth = require('./auth')
const port = 8082

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// use the strategy
auth(passport);
app.use(passport.initialize())

app.use('/api/v1', router)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
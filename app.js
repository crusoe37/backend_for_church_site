const express = require('express')
const app = express()
const router = require('./routes/v1')
const session = require('express-session')
const FileStore = require('session-file-store')(session)
const passport = require('passport')
const auth = require('./passport-config')
const port = 8082

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(
  session({
    secret: 'B8E88CF24D93EA6B6F981CBAC41F3',
    store: new FileStore(),
    cookie: {
      path: '/',
      httpOnly: true,
      maxAge: 60 * 60 * 1000
    },
    resave: true,
    saveUninitialized: true
  })
)

app.use('/api/v1', router)

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
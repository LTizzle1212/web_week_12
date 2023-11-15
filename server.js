const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const indexRouter = require('./routes/index.js')

const app = express() // creates the web app server

// enable parsing of POST request body
app.use(bodyParser.urlencoded({ extended: false}))

const staticFileLocation= path.join(__dirname, 'public')
app.use(express.static(staticFileLocation))



// tell app where the views (HTML files or templates) are
app.set('views', path.join(__dirname, 'views')) // this is where the code is stored
app.set('view engine', 'hbs') // use handlebars to generate views

// this will generate the response
app.use('/', indexRouter) // all requests to the app will be passed to indexRouter
// requests come in to this page


// start server running
const server = app.listen(process.env.PORT || 3000, function() {
    console.log('Server running on port', server.address().port)
})




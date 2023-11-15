const express = require('express')
const router = express.Router() // figures out what code to run in response to a request
// typically bases on the URL, and the method, GET, POST.....

// responds to get request to home page
router.get('/', function(req, res, next) { // needs 3 arguments - request, response, next
    // name of Handlebars file - name of a template, optional object with data for the template
    res.render('index', {
        title: 'Feedback Application',
        author: 'Logan',
        timePageLoadedAt: new Date()
    })
}) // get request to the home page

router.get('/feedback-form', function(req, res, next) {
    res.render('student_feedback_form')
})

router.post('/submit-feedback', function(req, res, next) { // changed from router.get to router.post
    // access form data
    //const formData = req.query // for a GET request - read URL query
    const formData = req.body // for a POST request
    console.log(formData)

    // todo - save to a database
    // automatically email someone when a feedback was submitted

    res.render('thank_you', {
        name: formData.name,
        email: formData.email,
        comments: formData.comments,
        currentStudent: formData['current-student']
     })
})



module.exports = router // this line needs to be the very last line

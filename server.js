const express = require('express')
const app = express()

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

const mongoose = require('mongoose')
mongoose.connect('mongodb://heroku_79pr6g05:j7gqjb791uiahoup0r3mk4t2g3@ds153667.mlab.com:53667/heroku_79pr6g05',
                 { useNewUrlParser: true, useUnifiedTopology: true })

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin",
               "https://vast-mountain-24464.herokuapp.com");
    res.header("Access-Control-Allow-Headers",
               "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods",
               "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});


var connectionString = 'mongodb://127.0.0.1:27017/test';
if(process.env.MLAB_USERNAME_WEBDEV) {
    var username = process.env.MLAB_USERNAME_WEBDEV;
    var password = process.env.MLAB_PASSWORD_WEBDEV;
    console.log(username + password)
    connectionString = 'mongodb://' + username + ':' + password;
    connectionString += '@ds153667.mlab.com:53667/heroku_79pr6g05';
}


require('./controllers/quizzes.controller.server')(app)
require('./controllers/questions.controller.server')(app)
require('./controllers/users.controller.server')(app)
require('./controllers/quiz-attempts.controller.server')(app)

app.listen(process.env.PORT || 3000)

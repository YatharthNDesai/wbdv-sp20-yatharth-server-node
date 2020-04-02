const express = require('express')
const app = express()

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin",
               "https://vast-mountain-24464.herokuapp.com/");
    res.header("Access-Control-Allow-Headers",
               "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods",
               "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

app.get('/Get', (req, res) => res.send('Get called'))
require('./controllers/quizzes.controller.server')(app)
require('./controllers/questions.controller.server')(app)

app.listen(3000)

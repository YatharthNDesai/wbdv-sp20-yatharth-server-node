const quizzesServices = require('../services/quizzes.service.server')

module.exports = function (app) {


    app.get('/api/quizzes', (req, res) =>
        quizzesServices
            .findAllQuizzes()
            .then(allQuizzes=> res.send(allQuizzes))
    )

    app.get('/api/quizzes/:qid', (req, res) =>
        quizzesServices
            .findQuizById(req.params['qid'])
            .then(quiz => res.json(quiz))
        )

    app.get('/Get', (req, res) => res.send('Get called'))

}

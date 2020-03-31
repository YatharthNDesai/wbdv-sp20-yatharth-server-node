const quizzesServices = require('../services/quizzes.service.server')

module.exports = function (app) {


    app.get('/api/quizzes', (req, res) =>
        res.send(quizzesServices
                     .findAllQuizzes()))

    app.get('/api/quizzes/:qid', (req, res) =>
        res.json(quizzesServices
                     .findQuizById(req.params['qid'])))

    app.get('/Get', (req, res) => res.send('Get called'))

}

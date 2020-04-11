const questionService = require("../services/questions.service.server")

module.exports = function (app) {
    app.get('/api/questions', (req, res) =>
        questionService
            .findAllQuestions()
        .then(allQuestions => res.json(allQuestions)))

    app.get('/api/questions/:qid', (req,res) =>
    questionService
        .findQuestionById(req.params['qid'])
        .then(question => res.json(question))
    )

    app.get("/api/quizzes/:qid/questions", (req,res) => {
        const quizId = req.params['qid']
        questionService.findQuestionsForQuiz(quizId)
            .then(questions => res.json(questions))

            }
    )
}

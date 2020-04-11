const questions = require('./questions')
const questionsDao = require('../daos/questions.dao.server')
const quizzesDao = require('../daos/quizzes.dao.server')

findAllQuestions = () => questionsDao.findAllQuestions()
findQuestionById = (qid) =>
    questionsDao.findQuestionById(qid)
findQuestionsForQuiz = (quizId) =>
    quizzesDao.findQuizById(quizId)
        .then(quiz => quiz.questions)


module.exports = {
    findQuestionsForQuiz,
    findAllQuestions,
    findQuestionById
}

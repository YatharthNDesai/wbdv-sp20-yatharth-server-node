const questions = require('./questions')

findAllQuestions = () => questions
findQuestionsForQuiz = (quizId) =>
    questions.filter(question => question.quizId === quizId)


module.exports = {
    findQuestionsForQuiz,
    findAllQuestions
}

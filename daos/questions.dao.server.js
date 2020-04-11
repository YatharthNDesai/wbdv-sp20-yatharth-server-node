const questionsModel = require('../models/questions/questions.model.server')

findAllQuestions = () => questionsModel.find()
findQuestionById = (qid) => questionsModel.findById(qid)



module.exports = {
    findAllQuestions,
    findQuestionById
}

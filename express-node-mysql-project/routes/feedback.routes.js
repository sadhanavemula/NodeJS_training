const feedbackController = require("../controllers/feedback.controller");

module.exports = function (app) {
    app.get('/feedbacks', feedbackController.getAllFeedbacks);
    app.get('/feedbacks/:id', feedbackController.getFeedbackById);
    app.get('/feedbacks/getByName', feedbackController.getFeedbackByName);
    app.post('/feedbacks/add', feedbackController.addFeedback);
    app.put('/feedbacks/:id', feedbackController.updateFeedback);
    app.delete('/feedbacks/:id', feedbackController.deleteFeedback);

}
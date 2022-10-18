const db = require('../models');
const Feedback = db.feedbacks;

module.exports = {
    //Getting all feedbacks
    //Get API requset URL is http://localhost:3000/feedbacks
    getAllFeedbacks: (req, res) => {
        Feedback.findAll({
        })
            .then((feedbacks) => {
                if (feedbacks.length != 0) {
                    res.send(feedbacks);
                }
                else {
                    res.status(400).send('There is no data in Feedback table!');
                }
            })
            .catch((error) => {
                console.log(error.message);
            })
    },
    //Getting Feedback by Id
    //Get API requset URL is http://localhost:3000/feedbacks/:id
    getFeedbackById: (req, res) => {
        const id = req.params.id;
        Feedback.findByPk(id)
            .then((feedback) => {
                if (feedback) {
                    res.send(feedback);
                }
                else {
                    res.status(400).send(`Cannot find Feedback with id=${id}`);
                }
            })
            .catch((error) => {
                console.log(error.message);
            })
    },
    //Getting Feedback by name
    //Get API requset URL is http://localhost:3000/feedbacks/getByName
    getFeedbackByName: (req, res) => {
        const name = req.body.name;
        Feedback.findOne({
            where: { feedbackName: name }
        })
            .then((feedback) => {
                if (feedback) {
                    res.send(feedback);
                }
                else {
                    res.status(400).send(`Cannot find Feedback with name=${name}`);
                }
            })
            .catch((error) => {
                console.log(error.message);
            })
    },
    //Adding New Feedback
    //Post API requset URL is http://localhost:3000/feedbacks/add
    addFeedback: (req, res) => {
        Feedback.create({
            feedbackName: req.body.name,
            desc: req.body.desc,
            rating: req.body.rating
        })
            .then((feedback) => {
                res.send(feedback);
            })
            .catch((error) => {
                console.log(error.message);
            })
    },
    //Updating Feedback
    //Put API requset URL is http://localhost:3000/feedbacks/:id
    updateFeedback: (req, res) => {
        const id = req.params.id;
        Feedback.update(req.body, {
            where: { id: id }
        })
            .then(num => {
                if (num == 1) {
                    res.send(`Feedback with id ${id} updated successfully!`);
                }
                else {
                    res.send(`Cannot find Feedback with id=${id}`);
                }
            })
            .catch((error) => {
                console.log(error.message);
            })
    },
    //Deleting Feedback
    //Delete API requset URL is http://localhost:3000/feedbacks/:id
    deleteFeedback: (req, res) => {
        const id = req.params.id;
        Feedback.destroy({
            where: { id: id }
        })
            .then(num => {
                if (num == 1) {
                    res.send(`Feedback with id ${id} deleted successfully!`);
                }
                else {
                    res.send(`Cannot find Feedback with id=${id}`);
                }
            })
            .catch((error) => {
                console.log(error.message);
            })
    }
}
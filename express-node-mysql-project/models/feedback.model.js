 module.exports = (sequelize, Sequelize) => {
    const Feedback = sequelize.define("feedbacks", {
        name: {
            type: Sequelize.STRING
        },
        descr: {
            type: Sequelize.STRING
        },
        rating: {
            type: Sequelize.STRING
        }
    })
    return Feedback;
}
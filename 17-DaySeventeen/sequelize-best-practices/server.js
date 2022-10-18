const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('tcsdb', 'root', 'welcome$1234', { host: 'localhost', dialect: 'mysql' });

sequelize.authenticate()
    .then(() => console.log('Connection established successfully.'))
    .catch((err) => console.log('Unable to connect. Error Message: ' + err.message))

const User = sequelize.define('users', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    age: {
        type: DataTypes.INTEGER
    }
})

const userList = [
    { name: 'Gautam', age: 23 },
    { name: 'Kartik', age: 20 },
    { name: 'Kaashvi', age: 30 },
    { name: 'Sarah', age: 45 },
    { name: 'Shreya', age: 40 },
]

sequelize.sync({ force: true })
    .then(() => {
        console.log('User Entity created..')
        User.bulkCreate(userList, { validate: true })
            .then(() => console.log('Bult Data inserted.'))
            .catch(() => console.log('There is some error.'))
    })
    .catch((err) => console.log('There is an error. Message: ' + err));
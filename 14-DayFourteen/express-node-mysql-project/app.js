const express = require('express');
const app = express();

//Middleware
app.use(express.json());

// const userRouter = require('./routes/user.routes');
// const authRouter = require('./routes/auth.routes');

// app.use('./user',userRouter);
// app.use('./auth',authRouter);

//Routes
require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);

//Database Connectivity
const db = require('./models/index');
const Role = db.role;

//force:true , will drop tables if it already exists.
db.sequelize.sync({})
    .then(() => {
        console.log('connected..!!');
        //initialRoles();
    })
    .catch((error) => { console.log(`There is some error${error}`) });

app.get('/', (req, res) => {
    res.send("Project started...");
})

app.listen(3000, () => {
    console.log("Application running at port 3000!!");
})

// const initialRoles = () => {
//     Role.create({ id: 1, name: "user" });
//     Role.create({ id: 2, name: "Admin" });
//     Role.create({ id: 3, name: "Moderator" });
// }
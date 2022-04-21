const {Sequelize,DataTypes} = require("sequelize");

const sequelize = new Sequelize('EmployeeDB', 'root', 'Kharvi@25', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
    pool: { max: 5, min: 0, idle: 10000 }
});

sequelize.authenticate()
.then(()=>{
    console.log("db connected")
})
.catch(()=>{
    console.log("error",err)
})

const db = {};
db.Sequelize = Sequelize
db.sequelize = sequelize

db.users = require("../model/userSchema")(sequelize,DataTypes);


db.sequelize.sync({force:false})
.then(()=>{
    console.log("then")
})
.catch(error=>console.log("error"))

db.user = require('../model/user')(sequelize, DataTypes)


module.exports =db
const express = require("express");
const sequelizerouter = express.Router();

const db = require("../db/Conn");

const database = db.users;
const userData = db.user;

//  register

sequelizerouter.post("/user-register", async (req, res) => {
  const { name, email, password } = req.body;
  console.log(name, email, password);

  const emailExist = await userData.findAll({where :{  email:email}})
 
 if(emailExist.length > 0) {
     res.send({message:"email already registered"})

   }else{
    console.log("email")
    const user = await userData.build({ name, email, password });
    await user
      .save()
      .then((resp) => {
      res.send({resp,message:"user registered successfully"})
      })
      .catch((err) => {
          console.log("error")
        res.send(err.parent.sqlMessage);
      });
    }
});

//login
sequelizerouter.post("/user-login", async (req, res) => {
    const {  email, password } = req.body;
    console.log( email, password);
  
    const user = await userData.findAll({where :{  email:email}})
    console.log(user)


        if(user.length > 0) {
            res.send({message:"user signin succesfull",user:user})
        }else{
            res.send({message:"email doesnt exist"});

        }
 


  });
  


//  get
sequelizerouter.get("/users", async (req, res) => {
  const data = await database.findAll({});
  console.log(data, "db");

  res.send(data);
});

sequelizerouter.post("/add", async (req, res) => {
  const { id, name, salary } = req.body;
  console.log(id, name, salary);

  const user = await database.build({ id, name, salary });
  await user
    .save()
    .then(() => {
      res.send("posted");
    })
    .catch((err) => {
      res.send(err.parent.sqlMessage);
    });
});

//  edit
sequelizerouter.put("/Edit/:id", async (req, res) => {
  const id = req.params.id.slice(0);
  const { name, salary } = req.body;
  let data = await database.update({ id, name, salary }, { where: { id: id } });
  console.log(data);
  res.send("succesfully edited id " + data);
});

//  delete
sequelizerouter.delete("/Delete/:id", async (req, res) => {
  res.send("Deleteuser");
  const id = req.params.id.slice(0);
  let data = await database.destroy({ where: { id: id } });
});

module.exports = sequelizerouter;

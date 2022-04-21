const mysql = require("mysql");
const express = require("express");
const app = express();
const cors = require("cors");
const bodyparser = require("body-parser");
const port = 4001;

app.use([express.json(),bodyparser.urlencoded({extended:true}),cors()])
app.use(bodyparser.json());




const sequlizerroute =  require("./routes/sequelizeRoute")

app.use(sequlizerroute)


app.listen(port, () => {
  console.log("running at port" + port);
});

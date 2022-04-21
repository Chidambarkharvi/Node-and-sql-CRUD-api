var mysqlConnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Kharvi@25",
    database: "EmployeeDB",
  });
  
  mysqlConnection.connect((err) => {
    if (!err) console.log("DB connected.");
    else
      console.log(
        "DB connection failed \n Error : " + JSON.stringify(err, undefined, 2)
      );
  });




app.get("/employees", (req, res) => {
    mysqlConnection.query("SELECT * FROM new_table", (err, rows, fields) => {
      if (!err) {
        console.log(rows);
        res.send(rows);
      } else {
        console.log(err);
      }
    });
  });
  
  //get an employees
  
  app.get("/employees/:id", (req, res) => {
    mysqlConnection.query(
      "SELECT * FROM new_table WHERE id = ?",
      [req.params.id],
      (err, rows, fields) => {
        if (!err) res.send(rows);
        else console.log(err);
      }
    );
  });
  
  //Delete an employees
  app.delete("/employees/:id", (req, res) => {
    mysqlConnection.query(
      "DELETE FROM new_table WHERE id = ?",
      [req.params.id],
      (err, rows, fields) => {
        if (!err) res.send("Deleted successfully.");
        else console.log(err);
      }
    );
  });
  
  //Insert an employees
  app.post("/employees", (req, res) => {
    let emp = req.body;
   
    mysqlConnection.query(
      "INSERT INTO new_table set ?",
      emp,
      (err, rows, fields) => {
        if (!err) res.send("Inserted employee id : " + emp.id);
        else console.log(err,"error");
      }
    );
  });
  
  app.put("/employees/:id", (req, res) => {
    let emp = req.body;
    console.log(emp.id,"id")
    
    mysqlConnection.query(
      "UPDATE new_table set name =? , salary = ?   WHERE id = ? ",
      [emp.name,emp.salary,emp.id,],
      (err, rows, fields) => {
        if (!err) res.send("updated employee id : " + emp.id);
        else console.log(err,"error");
      }
    );
  });
  
// packages
const express = require("express");
const config = require("config");
const bodyParser = require("body-parser");

// app configuration
const app = express();
const port = config.get("server-port");
const jsonParser = bodyParser.json();
const urlEncodedParser = bodyParser.urlencoded({ extended: true });

app.use(jsonParser);
app.use(urlEncodedParser);

const ipFn = require("./middleware/getIpAdress");
app.use("*", ipFn);

//method
app.get("/", (req, res, next) => {
  res.send("version using nodemon!");
});

// students routes loading
const studentRoutes = require("./routes/student.routes");
studentRoutes(app);

// students routes loading
const teacherRoutes = require("./routes/teacher.routes");
teacherRoutes(app);

app.listen(port, () => {
  console.log("server is running...");
});

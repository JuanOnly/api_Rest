const controller = require("./controller/logic/student.controller");

exports.StudentRoutes = () => {
  app.post("/student/", (req, res, next) => {
    controller.saveStudent(req, res, next);
  });

  app.get("/student/", (req, res, next) => {
    controller.getAll(req, res, next);
  });
};

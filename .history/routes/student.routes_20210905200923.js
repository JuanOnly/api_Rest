const controller = require("../controller/logic/student.controller");

module.exports = (app) => {
  console.log("loading routes");

  app.get("/student/", (req, res, next) => {
    controller.getAll(req, res, next);
  });

  app.get("/student/bycode/:code", (req, res, next) => {
    controller.getByCode(req, res, next);
  });

  app.post("/student/", (req, res, next) => {
    controller.createStudent(req, res, next);
  });

  app.delete("/student/", (req, res, next) => {
    controller.deleteStudent(req, res, next);
  });

  app.update("/student/", (req, res, next) => {
    controller.updateStudent(req, res, next);
  });
};

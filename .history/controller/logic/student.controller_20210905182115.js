// Dto
const studentDto = require("../../model/dto/student.dto");
const userDto = require("../../model/dto/user.dto");

exports.createStudent = (req, res, next) => {
  let std = {
    code: req.body.code,
    name: req.body.name,
    email: req.body.email,
    lastname: req.body.lastname,
    phone: req.body.phone,
    career: req.body.career,
  };

  studentDto.save(std, (err, data) => {
    if (err) {
      return res.status(400).json({ error: err });
    }
  });
};

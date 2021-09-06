// Dto
const studentDto = require("../../model/dto/student.dto");
const userDto = require("../../model/dto/user.dto");
const config = require("config");

//helper
const helper = require("../helpers/general.helper");

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
    let r = config.get("roles").student;
    let user = {
      name: std.name,
      lastname: std.lastname,
      username: std.code,
      password: helper.EncryptPassword(req.body.password),
      role: r,
    };
    userDto.save(user, (err, u) => {
      if (err) {
        return res.status(400).json({ error: err });
      }
    });
    res.status(201).json({ info: data });
  });
};

exports.updateStudent = (req, res, next) => {
  let std = {
    code: req.body.code,
    name: req.body.name,
    email: req.body.email,
    lastname: req.body.lastname,
    phone: req.body.phone,
    career: req.body.career,
  };

  studentDto.update({}, (err, data) => {
    if (err) {
      return res.status(400).json({ error: err });
    }
    res.status(201).json({ info: data });
  });
};

exports.getAll = (req, res, next) => {
  studentDto.update({ _id: req.body.id }, std, (err, data) => {
    if (err) {
      return res.status(400).json({ error: err });
    }
    res.status(200).json({ info: data });
  });
};

exports.getByCode = (req, res, next) => {
  studentDto.getByCode({ code: req.params.code }, std, (err, data) => {
    if (err) {
      return res.status(400).json({ error: err });
    }
    res.status(200).json({ info: data });
  });
};

exports.deletStudent = () => {
  studentDto.delete({ _id: req.body.id }, std, (err, data) => {
    if (err) {
      return res.status(400).json({ error: err });
    }
    res.status(204).json({ info: data });
  });
};

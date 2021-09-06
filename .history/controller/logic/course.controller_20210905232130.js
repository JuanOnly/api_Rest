// Dto
const courseDto = require("../../model/dto/course.dto");
const userDto = require("../../model/dto/user.dto");
const config = require("config");

exports.createCourse = (req, res, next) => {
  let course = {
    name: req.body.name,
    code: req.body.code,
  };

  courseDto.create(course, (err, data) => {
    if (err) {
      return res.status(400).json({ error: err });
    }
    userDto.create((err, u) => {
      if (err) {
        courseDto.delete({ _id: data._id }, (err, data) => {
          console.log("Deleting due to no user creation");
          return res.status(400).json({ error: err });
        });
      }
    });
    res.status(201).json({ info: data });
  });
};

exports.getByCode = (req, res, next) => {
  periodDto.getByCode({ code: req.params.code }, std, (err, data) => {
    if (err) {
      return res.status(400).json({ error: err });
    }
    res.status(200).json({ info: data });
  });
};

exports.updateCourse = (req, res, next) => {
  let r = config.get("roles").course;
  let course = {
    name: req.body.name,
    code: req.body.code,
  };
  res.status(201).json({ info: data });
};

exports.getAll = (req, res, next) => {
  courseDto.update({ _id: req.body.id }, course, (err, data) => {
    if (err) {
      return res.status(400).json({ error: err });
    }
    res.status(200).json({ info: data });
  });
};

exports.deleteCourse = () => {
  courseDto.delete({ _id: req.body.id }, course, (err, data) => {
    if (err) {
      return res.status(400).json({ error: err });
    }
    res.status(204).json();
  });
};

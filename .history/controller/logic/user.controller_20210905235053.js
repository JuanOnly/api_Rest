// Dto
const userDto = require("../../model/dto/user.dto");
const config = require("config");

exports.createUser = (req, res, next) => {
  let user = {
    name: req.body.name,
    code: req.body.code,
  };

  userDto.create(user, (err, data) => {
    if (err) {
      return res.status(400).json({ error: err });
    }
    let user = {
      name: req.body.name,
      code: req.body.code,
    };
    userDto.create(user, (err, u) => {
      if (err) {
        userDto.delete({ _id: data._id }, (err, data) => {
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

exports.updateUser = (req, res, next) => {
  let r = config.get("roles").user;
  let user = {
    name: req.body.name,
    code: req.body.code,
  };
  res.status(201).json({ info: data });
};

exports.getAll = (req, res, next) => {
  userDto.update({ _id: req.body.id }, user, (err, data) => {
    if (err) {
      return res.status(400).json({ error: err });
    }
    res.status(200).json({ info: data });
  });
};

exports.deleteUser = () => {
  userDto.delete({ _id: req.body.id }, user, (err, data) => {
    if (err) {
      return res.status(400).json({ error: err });
    }
    res.status(204).json();
  });
};

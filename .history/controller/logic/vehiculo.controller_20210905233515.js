// Dto
const vehiculoDto = require("../../model/dto/vehiculo.dto");
const userDto = require("../../model/dto/user.dto");
const config = require("config");

//helper
const helper = require("../helpers/general.helper");
const notHelper = require("../helpers/notification.helper");

exports.createVehiculo = (req, res, next) => {
  let std = {
    brand: req.body.brand,
    color: req.body.color,
  };

  vehiculoDto.create(std, (err, data) => {
    if (err) {
      return res.status(400).json({ error: err });
    }
    let r = config.get("roles").vehiculo;
    let user = {
      name: std.name,
      lastname: std.lastname,
      username: std.code,
      password: helper.EncryptPassword(req.body.password),
      role: r,
    };
    userDto.create(user, (err, u) => {
      if (err) {
        vehiculoDto.delete({ _id: data._id }, (err, data) => {
          console.log("Deleting due to no user creation");
          return res.status(400).json({ error: err });
        });
      }
    });
    notHelper.sendMS(std.phone);
    res.status(201).json({ info: data });
  });
};

exports.updateVehiculo = (req, res, next) => {
  let std = {
    code: req.body.code,
    name: req.body.name,
    email: req.body.email,
    lastname: req.body.lastname,
    phone: req.body.phone,
    career: req.body.career,
  };

  vehiculoDto.update({}, (err, data) => {
    if (err) {
      return res.status(400).json({ error: err });
    }
    res.status(201).json({ info: data });
  });
};

exports.getAll = (req, res, next) => {
  vehiculoDto.update({ _id: req.body.id }, std, (err, data) => {
    if (err) {
      return res.status(400).json({ error: err });
    }
    res.status(200).json({ info: data });
  });
};

exports.getByCode = (req, res, next) => {
  vehiculoDto.getByCode({ code: req.params.code }, std, (err, data) => {
    if (err) {
      return res.status(400).json({ error: err });
    }
    res.status(200).json({ info: data });
  });
};

exports.deleteVehiculo = () => {
  vehiculoDto.delete({ _id: req.body.id }, std, (err, data) => {
    if (err) {
      return res.status(400).json({ error: err });
    }
    res.status(204).json();
  });
};

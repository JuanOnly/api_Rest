// Dto
const periodDto = require("../../model/dto/period.dto");
const userDto = require("../../model/dto/user.dto");
const config = require("config");

exports.createPeriod = (req, res, next) => {
  let period = {
    year: req.body.year,
    number: req.body.number,
    current: req.body.current,
  };

  periodDto.create(period, (err, data) => {
    if (err) {
      return res.status(400).json({ error: err });
    }
    let user = {
      year: req.body.year,
      number: req.body.number,
      current: req.body.current,
    };
    userDto.create(user, (err, u) => {
      if (err) {
        periodDto.delete({ _id: data._id }, (err, data) => {
          console.log("Deleting due to no user creation");
          return res.status(400).json({ error: err });
        });
      }
    });
    res.status(201).json({ info: data });
  });
};

exports.updatePeriod = (req, res, next) => {
  let r = config.get("roles").period;
  let period = {
    year: req.body.year,
    number: req.body.number,
    current: req.body.current,
  };
  res.status(201).json({ info: data });
};

exports.getAll = (req, res, next) => {
  periodDto.update({ _id: req.body.id }, period, (err, data) => {
    if (err) {
      return res.status(400).json({ error: err });
    }
    res.status(200).json({ info: data });
  });
};

exports.deletePeriod = () => {
  periodDto.delete({ _id: req.body.id }, period, (err, data) => {
    if (err) {
      return res.status(400).json({ error: err });
    }
    res.status(204).json();
  });
};

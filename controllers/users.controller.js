const users = require("../models/users.model");
const path = require("path");

exports.getUsers = (req, res) => {
  res.status(200).json({
    success: true,
    users,
  });
};

exports.getRandomUser = (req, res) => {
  const randomNumber = Math.floor(Math.random() * users.length);
  const randomUser = users.slice(randomNumber, randomNumber + 1);
  res.status(200).json({
    success: true,
    randomUser,
  });
};

exports.saveUser = (req, res) => {
  const Id = Number(users.length) + 1;
  const name = req.body.name;
  const gender = req.body.gender;
  const contact = req.body.contact;
  const address = req.body.address;
  const photoUrl = req.body.photoUrl;

  const user = { Id, name, gender, contact, address, photoUrl };

  users.push(user);
  res.status(201).json({
    success: true,
    users,
  });
};

exports.deleteUser = (req, res) => {
  const { id } = req.params;

  newUsers = users.filter((user) => user.Id !== Number(id));
  res.send(newUsers);
};

exports.updateUser = (req, res) => {
  const { id } = req.params;
  // const newData = req.body;
  const filter = { _id: id };

  const newData = users.find((user) => user.Id === Number(id));

  newData.Id = id;
  newData.name = req.body.name;
  newData.gender = req.body.gender;
  newData.contact = req.body.contact;
  newData.address = req.body.address;
  newData.photoUrl = req.body.photoUrl;

  res.send(newData);
};

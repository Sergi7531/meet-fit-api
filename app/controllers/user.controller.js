const User = require("../models/user.model.js");
// Create and Save a new User
exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
          message: "User data is not complete."
        });
      }
      // Create a User
      const user = new User({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        active: req.body.active || true,
      });
      // Save User in the database
      User.create(user, (err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "There was an error creating the user. Please, try again later."
          });
        else res.send(data);
      });
};
// Retrieve all Tutorials from the database (with condition).
exports.findAll = (req, res) => {
  const username = req.query.username;
  User.getAll(username, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving users."
      });
    else res.send(data);
  });
};
exports.findAllActive = (req, res) => {
  Tutorial.getAllPublished((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving users."
      });
    else res.send(data);
  });  
};
// Find a single User with a id
exports.findOne = (req, res) => {
  
};
// find all published Tutorials
exports.findAllPublished = (req, res) => {
  
};
// Update a User identified by the id in the request
exports.update = (req, res) => {
  
};
// Delete a User with the specified id in the request
exports.delete = (req, res) => {
  
};
// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  
};

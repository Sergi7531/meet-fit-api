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
  // Retrieve all Users from the database (with condition).
  exports.getAll = (req, res) => {
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
  exports.getAllActive = (req, res) => {
    User.getAllActive((err, data) => {
      if (err)
        res.status(500).send({
          message: "500 - USER (actives) - Internal server error"
        });
      else res.send(data);
    });
  };
  // Find a single User with a id
  exports.findOne = (req, res) => {
    User.findById(req.params.id, (err, data) => {
      if (err) {
        if (err.kind === "404") {
          res.status(404).send({
            message: `404 - USER (findById) - User not found with ID: ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "500 - USER (findById) - Internal server error" + req.params.id
          });
        }
      } else res.send(data);
    });
  };
  // find all active Users
  exports.getAllActive = (req, res) => {
    User.getAllActive((err, data) => {
      if (err)
        res.status(500).send({
          message: `500 - USER (/actives) - Error retrieving active users.`
        });
      else res.send(data);
    });

  };
  // Update a User identified by the id in the request
  exports.updateById = (req, res) => {
    if(!req.body) {
      if(err) {
        res.status(Number.parseInt(err.kind)).send ({
          message: err.kind + " - USER DELETE (/users/) ID: " + req.params.id
        })
        return;
      }
    }
      console.log(res.status + " - USER PUT, ID: " + req.params.id)

      User.updateById(req.params.id, new User(req.body), (err, data) => {
            res.send({
              message: " - USER PUT (/users/) ID: " + req.params.id
            })
      })
  };
  // Delete a User with the specified id in the request
  exports.remove = (req, res) => {

    User.remove(req.params.id, (err, data) => {
      if(err) {
        res.status(Number.parseInt(err.kind)).send ({
          message: err.kind + " - USER DELETE (/users/) ID: " + req.params.id
        })
        return;
      }
      
      res.send({
        message: "200 - USER DELETE (/users/) ID: " + req.params.id
      })

    });

  };
  // Delete all Users from the database.
  exports.removeAll = (req, res) => {

    User.removeAll((err, data) => {

      if(err) {
        res.status(Number.parseInt(err.kind)).send ({
          message: err.kind + " - USER DELETE ALL (/users/deleteAll)"
        })
        return;
      }

      res.status(500).send ({
        message: "500 - USER DELETE ALL(/users/deleteAll)"
      })

      res.send({
        message: "200 - USER DELETE ALL(/users/deleteAll) | DELETED: " + res.length
      });
    });
  }
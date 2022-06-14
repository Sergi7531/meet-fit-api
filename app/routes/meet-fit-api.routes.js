module.exports = app => {
    const users = require("../controllers/user.controller.js");
    var router = require("express").Router();
    // Create a new User
    router.post("/", users.create);
    // Retrieve all Users
    router.get("/", users.getAll);
    // Retrieve all active Users
    router.get("/actives", users.getAllActive);
    // Retrieve a single User by id
    router.get("/findById/:id", users.findOne);
    // Update a User with id
    router.put("/:id", users.updateById);
    // Delete a User with id
    router.delete("/:id", users.remove);  
    // Delete all Users
    router.delete("/", users.removeAll);
    app.use('/api/users', router);
  };
  
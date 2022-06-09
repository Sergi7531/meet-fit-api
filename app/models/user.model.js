const sql = require("./db.js");
// constructor
const User = function(user) {
  this.username = user.username
  this.password = user.password
  this.email = user.email
  this.active = user.active
};
User.create = (newUser, result) => {
  sql.query("INSERT INTO users SET ?", newUser, (err, res) => {
    if (err) {
      console.log("POST USER:", err.message, "for user" , newUser.username , (newUser.email));
      result(err, null);
      return;
    }
    console.log("created user: ", { id: res.insertId, ...newUser });
    result(null, { id: res.insertId, ...newUser });
  });
};
User.findById = (id, result) => {
  sql.query(`SELECT * FROM users WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log("GET (findById) USER:", err.message, "for id" , id);
      result(err, null);
      return;
    }
    if (res.length) {
      console.log("GET (findById) USER: ", res.length);
      result(null, res[0]);
      return;
    }
    // not found User with the id
    console.log("404 - USER (findById) - User not found with ID:", id)
  });
};
User.getAll = (username, result) => {
  let query = "SELECT * FROM users";
  if (username) {
    query += ` WHERE username LIKE '%${username}%'`;
  }
  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    if(username) {
      console.log("GET (all) USER (QUERY PARAM username='" + username + "'):", res.length);
    } else {
      console.log("GET (all) USER:", res.length);
    }
    result(null, res);
  });
};
User.getAllActive = result => {
  sql.query("SELECT * FROM users WHERE active=true", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("GET (actives) USER:", res.length);
    result(null, res);
  });
};
User.updateById = (id, user, result) => {
  sql.query(
    "UPDATE users SET username = ?, email = ?, active = ?, last_login = ?, password = ? WHERE id = ?",
    [user.username, user.email, user.active, user.last_login, user.password , id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      if (res.affectedRows == 0) {
        // not found User with the id
        result({ kind: "not_found" }, null);
        return;
      }
      console.log("updated user: ", { id: id, ...user });
      result(null, { id: id, ...user });
    }
  );
};
User.remove = (id, result) => {
  sql.query("DELETE FROM users WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    if (res.affectedRows == 0) {
      // not found User with the id
      result({ kind: "not_found" }, null);
      return;
    }
    console.log("deleted user with id: ", id);
    result(null, res);
  });
};
User.removeAll = result => {
  sql.query("DELETE FROM users", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log(`deleted ${res.affectedRows} users`);
    result(null, res);
  });
};
module.exports = User;
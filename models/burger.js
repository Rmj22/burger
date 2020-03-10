// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  all: (cb) => {
    orm.all((res) => {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: (vals, cb) => {
    orm.create(vals, (res) => {
      cb(res);
    });
  },
  update: (condition, cb) => {
    orm.update(condition, (res) => {
      cb(res);
    });
  }
};


module.exports = burger;
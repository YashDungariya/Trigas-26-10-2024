const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1/TRIGAS-WEB");

const db = mongoose.connection;

db.on("connected", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Connected`);
  }
});

module.exports = db;

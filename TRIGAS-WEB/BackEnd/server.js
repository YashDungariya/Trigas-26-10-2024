const express = require("express");
// const port = 5000;
const port = process.env.PORT || 5000; // Use the PORT from
// const db = require("./config/db");
const mongoose = require('mongoose');

const methodOverride = require("method-override");
const dns = require('dns');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const app = express();

const customer = require("./Model/CustomerSchema");
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());
app.use(methodOverride("_method"));

app.use(express.json());
app.use("/", require("./Route/customerRoute"));

app.use(express.urlencoded());

require("dotenv").config();

const mongoUrl = process.env.MONGO_URL || 'your-atlas-connection-url'; // MongoDB Atlas connection URL

dns.setServers(['8.8.8.8', '1.1.1.1']); // Set to Google or Cloudflare DNS

// MongoDB Connection
mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("connected", (err) => {
    if (err) {
        console.log("DB not connected");
    } else {
        console.log("DB connected");
    }
});


// app.use(route);

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`server start : ${port}`);
  }
});

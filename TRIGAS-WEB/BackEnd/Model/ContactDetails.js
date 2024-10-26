const mongoose = require("mongoose");

const table = mongoose.Schema({
  customer_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "customer",
  },
  namefororder: {
    type: String,
    required: true,
  },
  phonenumberfororder: {
    type: String,
    required: true,
  },
  nameforstock: {
    type: String,
    required: true,
  },
  phonenumberforstock: {
    type: String,
    required: true,
  },
  nameforpayment: {
    type: String,
    required: true,
  },
  phonenumberforpayment: {
    type: String,
    required: true,
  },
  nameforoperator: {
    type: String,
    required: true,
  },
  phonenumberforoperator: {
    type: String,
    required: true,
  },
  nameforowner: {
    type: String,
    required: true,
  },
  phonenumberforowner: {
    type: String,
    required: true,
  },
});

const Contact = mongoose.model("Contact", table);
module.exports = Contact;

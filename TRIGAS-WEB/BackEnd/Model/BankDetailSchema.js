const mongoose = require("mongoose");
const details = mongoose.Schema({
  customer_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "customer",
  },
  bank: {
    type: String,
    required: true,
  },
  supplier: {
    type: String,
    required: true,
  },
  sapcode: {
    type: String,
    required: true,
  },
  product: {
    type: String,
    required: true,
  },
  accountname: {
    type: String,
    required: true,
  },
  bankname: {
    type: String,
    required: true,
  },
  accountno: {
    type: String,
    required: true,
  },
  ifsc: {
    type: String,
    required: true,
  },
  branch: {
    type: String,
    required: true,
  },
  typeofaccounnt: {
    type: String,
    required: true,
  },
});
const bankdetails = mongoose.model("bankdetails", details);
module.exports = bankdetails;

const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema({
  contactFormData: String,
  companyFormData: String,
  productFormData: String,
  sapFormData: String,
  createdAt: Date,
  updatedAt: Date,
  // add other fields if necessary
});

const Customer = mongoose.model("Customer", CustomerSchema);

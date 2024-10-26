const mongoose = require("mongoose");
const customer = require("./CustomerSchema");

const table = mongoose.Schema({
  customer_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "customer",
  },
  productsegment: {
    type: String,
    required: true,
  },
  nokiln: {
    type: String,
    required: true,
  },
  lengthofkiln: {
    type: String,
    required: true,
  },
  dailynaturalgasconsumption: {
    type: String,
    required: true,
  },
  dailypropaneconsumption: {
    type: String,
    required: true,
  },
  hourlypropaneconsumption: {
    type: String,
    required: true,
  },
  monthlypropaneconsumption: {
    type: String,
    required: true,
  },
  startingstock: {
    type: String,
    required: true,
  },
  newpurchase: {
    type: String,
    required: true,
  },
  updatedstock: {
    type: String,
    required: true,
  },
  remaininghourseofstock: {
    type: String,
    required: true,
  },
});

const productdetails = mongoose.model("productdetails", table);

module.exports = productdetails;

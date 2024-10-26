const mongoose = require("mongoose");

const table = mongoose.Schema({
  customer_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "customer",
  },
  sapcode: {
    type: [String],
    required: [true, "SAP Code is required"],
  },
  supplier: {
    type: [String],
    required: [true, "Supplier is required"],
  },
  product: {
    type: [String],
    // required: [true, "Product is required"],
  },
});

const SapCode = mongoose.model("SapCode", table);

module.exports = SapCode;

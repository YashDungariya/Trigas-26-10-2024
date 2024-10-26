const mongoose = require("mongoose");

// Define a schema for storing key-value pairs
const localStorageItemSchema = new mongoose.Schema(
  {
    data: {
      type: Map,
      of: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Create a model from the schema
const LocalStorageItem = mongoose.model(
  "LocalStorageItem",
  localStorageItemSchema
);

module.exports = LocalStorageItem;

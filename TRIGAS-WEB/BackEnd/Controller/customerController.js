const mongoose = require("mongoose");
const customer = require("../Model/CustomerSchema");

const customerinsert = (req, res) => {
  customer
    .create({
      companyname: req.body.companyname,
      email: req.body.email,
      primaryphonenumber: req.body.primaryphonenumber,
      secondaryphonenumber: req.body.secondaryphonenumber,
      addressstreet1: req.body.addressstreet1,
      addressstreet2: req.body.addressstreet2,
      state: req.body.state,
      country: req.body.country,
      city: req.body.city,
      zipcode: req.body.zipcode,
      associatessuppliers: req.body.associatessuppliers,
      team: req.body.team,
      typeofcompany: req.body.typeofcompany,
      licensenumber: req.body.licensenumber,
      ourcompany: req.body.ourcompany,
      tannumber: req.body.tannumber,
      gstnumber: req.body.gstnumber,
      pannumber: req.body.pannumber,
      licensevallidtill: req.body.licensevallidtill,
      licensecapacity: req.body.licensecapacity,
      latitude: req.body.latitude,
      longitude: req.body.longitude,
      transporter: req.body.transporter,
      tanknumber: req.body.tanknumber,
    })
    .then(() => {
      console.log(`Data inserted..`);
      res.redirect("back");
    })
    .catch((err) => {
      console.log(err);
    });
};

const view = async (req, res) => {
  await customer.find({}).then((data) => {
    return res.send(data);
  });
};

const viewEditCustomer = async (req, res) => {
  try {
    const customerData = await customer.findById(req.params.id);
    if (!customerData) {
      return res.status(404).send("Customer not found");
    }
    res.json(customerData);
  } catch (error) {
    console.error("Error fetching customer:", error);
    res.status(500).send("Server error");
  }
};

const updateCustomer = async (req, res) => {
  try {
    const updatedCustomer = await customer.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true } // Return the updated document and run validation
    );

    if (!updatedCustomer) {
      return res.status(404).send("Customer not found");
    }
    res.json(updatedCustomer);
  } catch (error) {
    console.error("Error updating customer:", error);
    res.status(500).send("Server error");
  }
};

const viewCustomer = async (req, res) => {
  try {
    const { id } = req.params;

    // Validate if the ID is provided
    if (!id) {
      return res.status(400).send("ID is required");
    }

    // Validate if the ID is a valid ObjectId
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).send("Invalid ID format");
    }

    const customerData = await customer.findById(id);

    // Check if the customer was found
    if (!customerData) {
      return res.status(404).send("Customer not found");
    }

    // Send the customer data as the response
    res.json(customerData);
  } catch (error) {
    console.error("Error fetching customer:", error);
    res.status(500).send("Server error");
  }
};

module.exports = {
  customerinsert,
  view,
  viewEditCustomer,
  updateCustomer,
  viewCustomer,
};

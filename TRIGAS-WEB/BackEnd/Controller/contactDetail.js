const Contact = require("../Model/ContactDetails");
const customer = require("../Model/CustomerSchema");

const contact = async (req, res) => {
  await Contact.create({
    customer_id: req.body.customer_id,
    namefororder: req.body.namefororder,
    phonenumberfororder: req.body.phonenumberfororder,
    nameforstock: req.body.nameforstock,
    phonenumberforstock: req.body.phonenumberforstock,
    nameforpayment: req.body.nameforpayment,
    phonenumberforpayment: req.body.phonenumberforpayment,
    nameforoperator: req.body.nameforoperator,
    phonenumberforoperator: req.body.phonenumberforoperator,
    nameforowner: req.body.nameforowner,
    phonenumberforowner: req.body.phonenumberforowner,
  })
    .then(() => {
      console.log("contact data inserted");
      res.redirect("back");
    })
    .catch((err) => {
      console.log(err);
    });
};

const viewContact = async (req, res) => {
  try {
    const customer = await customer.findById(req.params.id);
    if (customer) {
      res.json(customer);
    } else {
      res.status(404).send("Customer not found");
    }
  } catch (err) {
    console.error("Error fetching customer:", err);
    res.status(500).send("Server error");
  }
};

const viewContactDetail = async (req, res) => {
  try {
    const contacts = await Contact.find({ customer_id: req.params.id });
    res.json(contacts);
  } catch (err) {
    console.error("Error fetching contact details:", err);
    res.status(500).send("Server error");
  }
};

module.exports = {
  contact,
  viewContact,
  viewContactDetail,
};

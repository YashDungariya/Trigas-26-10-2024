const express = require("express");

const route = express.Router();

// --------------
// const controller = require("../Controller/customerController");

const addCustomer = require("../Controller/addCustomer");

// route.post("/customerinsert", controller.customerinsert);

route.post("/savelocalstorage", addCustomer.addCustomer);
route.get("/getlocalstorage", addCustomer.viewAddCustomer);

route.get("/getlocalstorage/:id", addCustomer.findbyid);

// // Edit Customer Route
route.get("/edit/:id", addCustomer.viewEditCustomer);
route.put("/updatecustomer/:id", addCustomer.updateCustomer);
route.put("/updateotherdata/:id", addCustomer.updateOtherData);

// --------------

// const controller = require("../Controller/customerController");
// const productdetails = require("../Controller/productController");
// const bankdetail = require("../Controller/bankdetailsController");
// const contact = require("../Controller/contactDetail");
// const SapCode = require("../Controller/sapController");

// route.get("/customerview", controller.view);

// route.post("/customerinsert", controller.customerinsert);
// route.post("/productdetailsinsert", productdetails.productdetailsinsert);
// route.post("/bankdetailsinsert", bankdetail.cusbankdetails);
// route.post("/contactdetails", contact.contact);
// route.post("/sapcodeinsert", SapCode.sapcodeicontroll);
// route.get("/customers/:id", SapCode.sapview);
// route.get("/customers/:id/sap", SapCode.sapview);

// route.get("/customers/:id", contact.viewContact);
// route.get("/customers/:id/contacts", contact.viewContactDetail);

// route.get("/customers/:id/bank", bankdetail.viewBankDetail);
// route.get("/customers/:id/product", productdetails.viewProductDetail);

module.exports = route;

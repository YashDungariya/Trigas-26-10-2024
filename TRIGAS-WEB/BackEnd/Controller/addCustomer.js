const mongoose = require("mongoose");
const LocalStorageData = require("../Model/addCustomerSchema");

const addCustomer = async (req, res) => {
  try {
    const localStorageData = req.body;

    // Save the entire localStorage data as a single document
    const savedData = await LocalStorageData.create({ data: localStorageData });

    res.status(200).json({ message: "Data saved successfully", savedData });
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(500).json({ error: "Failed to save data" });
  }
};

const viewAddCustomer = async (req, res) => {
  try {
    const allData = await LocalStorageData.find({});
    res.status(200).json(allData);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
};

const findbyid = async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).send("Invalid ID format");
  }

  try {
    const customer = await LocalStorageData.findById(req.params.id);
    if (!customer) {
      return res.status(404).send("Customer not found");
    }
    res.json(customer);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// const viewEditCustomer = async (req, res) => {
//   try {
//     const customerData = await LocalStorageData.findById(req.params.id);
//     if (!customerData) {
//       return res.status(404).send("Customer not found");
//     }
//     res.json(customerData);
//   } catch (error) {
//     console.error("Error fetching customer:", error);
//     res.status(500).send("Server error");
//   }
// };
// Example function to find a customer by ID
async function viewEditCustomer(req, res) {
  const customerId = req.params.id; // Ensure this ID is valid
  if (!customerId || !mongoose.Types.ObjectId.isValid(customerId)) {
    return res.status(400).json({ error: "Invalid customer ID" });
  }

  try {
    const customer = await LocalStorageData.findById(customerId);
    if (!customer) {
      return res.status(404).json({ error: "Customer not found" });
    }
    res.json(customer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

const updateCustomer = async (req, res) => {
  const { id } = req.params;
  const { sapFormData } = req.body; // Extract sapFormData from request body

  try {
    // Find and update the document with the new data
    const updatedItem = await LocalStorageData.findByIdAndUpdate(
      id,
      { $set: { "data.sapFormData": sapFormData } }, // Update the specific field
      { new: true } // Return the updated document
    );

    if (!updatedItem) {
      return res.status(404).json({ message: "Item not found" });
    }

    res.status(200).json(updatedItem);
  } catch (error) {
    res.status(500).json({ message: "Error updating item", error });
  }
};

const updateOtherData = async (req, res) => {
  const { id } = req.params;
  const { companyFormData, contactFormData, productFormData } = req.body;

  // console.log("Received companyFormData:", companyFormData);
  // console.log("Received contactFormData:", contactFormData);

  try {
    // Convert the form data objects to JSON strings (if needed)
    const companyFormDataString = JSON.stringify(companyFormData);
    const contactFormDataString = JSON.stringify(contactFormData);
    const productFormDataString = JSON.stringify(productFormData);

    // Use $set to update the companyFormData and contactFormData keys inside the data map
    const updatedItem = await LocalStorageData.findByIdAndUpdate(
      id,
      {
        $set: {
          "data.companyFormData": companyFormDataString, // Update companyFormData
          "data.contactFormData": contactFormDataString, // Update contactFormData
          "data.productFormData": productFormDataString, // Update contactFormData
        },
      },
      { new: true } // Return the updated document
    );

    if (!updatedItem) {
      return res.status(404).json({ message: "Item not found" });
    }

    res.status(200).json(updatedItem);
  } catch (error) {
    console.error("Error updating item:", error);
    res.status(500).json({ message: "Error updating item", error });
  }
};

module.exports = {
  addCustomer,
  viewAddCustomer,
  findbyid,
  viewEditCustomer,
  updateCustomer,
  updateOtherData,
};

const SapCode = require("../Model/SapCodeschema");

const sapcodeicontroll = async (req, res) => {
  try {
    // console.log("Received data:", req.body);
    const { customer_id, suppliers, sapcodes, products } = req.body;

    // Validation (if not already handled by Mongoose schema)
    if (!customer_id || !suppliers || !sapcodes || !products) {
      return res.status(400).json({ error: "All fields are required." });
    }

    // Further validation (optional)
    if (
      suppliers.length !== sapcodes.length ||
      suppliers.length !== products.length
    ) {
      return res.status(400).json({
        error: "Mismatch in the number of suppliers, sapcodes, and products.",
      });
    }

    // Create a new SapCode document
    const newSapCode = new SapCode({
      customer_id,
      supplier: suppliers, // Ensure this matches with your data structure
      sapcode: sapcodes,
      product: products,
    });

    // Save to the database
    await newSapCode.save();
    res.status(201).json({ message: "SAP Codes successfully saved!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const sapview = async (req, res) => {
  try {
    const sapdata = await SapCode.find({ customer_id: req.params.id });
    res.json(sapdata);
  } catch (err) {
    console.error("Error fetching contact details:", err);
    res.status(500).send("Server error");
  }
};

module.exports = {
  sapcodeicontroll,
  sapview,
};

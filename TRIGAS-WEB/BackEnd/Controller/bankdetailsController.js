const bankdetails = require("../Model/BankDetailSchema");

const cusbankdetails = (req, res) => {
  bankdetails
    .create({
      customer_id: req.body.customer_id,
      company_id: req.body.company_id,
      bank: req.body.bank,
      supplier: req.body.supplier,
      sapcode: req.body.sapcode,
      product: req.body.product,
      accountname: req.body.accountname,
      bankname: req.body.bankname,
      accountno: req.body.accountno,
      ifsc: req.body.ifsc,
      branch: req.body.branch,
      typeofaccounnt: req.body.typeofaccounnt,
    })
    .then(() => {
      console.log("Bank details Inserted...");
    });
};

const viewBankDetail = async (req, res) => {
  try {
    const bankdeatils = await bankdetails.find({ customer_id: req.params.id });
    res.json(bankdeatils);
  } catch (err) {
    console.error("Error fetching contact details:", err);
    res.status(500).send("Server error");
  }
};

module.exports = {
  cusbankdetails,

  viewBankDetail,
};

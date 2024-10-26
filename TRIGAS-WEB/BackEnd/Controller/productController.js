const productdetails = require("../Model/ProductDetailsSchema");

const productdetailsinsert = (req, res) => {
  productdetails
    .create({
      customer_id: req.body.customer_id,
      productsegment: req.body.productsegment,
      nokiln: req.body.nokiln,
      lengthofkiln: req.body.lengthofkiln,
      dailynaturalgasconsumption: req.body.dailynaturalgasconsumption,
      dailypropaneconsumption: req.body.dailypropaneconsumption,
      hourlypropaneconsumption: req.body.hourlypropaneconsumption,
      monthlypropaneconsumption: req.body.monthlypropaneconsumption,
      startingstock: req.body.startingstock,
      newpurchase: req.body.newpurchase,
      updatedstock: req.body.updatedstock,
      remaininghourseofstock: req.body.remaininghourseofstock,
    })
    .then(() => {
      console.log(`Product-Details Data inserted..`);
      res.redirect("back");
    })
    .catch((err) => {
      console.log(err);
    });
};

const viewProductDetail = async (req, res) => {
  try {
    const productdeatils = await productdetails.find({
      customer_id: req.params.id,
    });
    res.json(productdeatils);
  } catch (err) {
    console.error("Error fetching contact details:", err);
    res.status(500).send("Server error");
  }
};

module.exports = {
  productdetailsinsert,
  viewProductDetail,
};

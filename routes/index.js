const express = require("express");
const router = express.Router();
const productModel = require('../models/productModel.js')

//index Route
router.get("/", async (req, res) => {
    const Products = await productModel.find({});
    res.render("./pages/index", {Products});
});

module.exports = router;
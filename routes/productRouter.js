const express = require("express");
const router = express.Router();
const multer = require("multer");
const {storage} = require("../config/cloudConfig");
const upload = multer({ storage });
const productModel = require("../models/productModel")

//Create Route
router.post("/create",upload.single('product[image]'), async(req, res) => {
    let url = req.file.path;
    let filename = req.file.filename;
    // console.log(url, "..", filename);
    let newProduct = new productModel(req.body.product);
    newProduct.image = {url, filename};
    await newProduct.save();
    // console.log(newProduct);
    res.redirect("/");
        // res.send(req.file);
});


// Show Route
router.get("/:id", async (req, res) => {
    let {id} = req.params;
    // console.log(id);
    const Products = await productModel.findById(id);
    console.log(Products);
    res.render("./pages/productShow.ejs", {Products});
});

module.exports = router;
const express = require("express");
const router = express.Router();
const productModel = require('../models/productModel.js');
const showCarousel = require('../middlewares/showCarousel.js');
const expressSession = require('express-session');


// showCarousel middleware
router.use(showCarousel);

//index Route
router.get("/",async (req, res) => {
    const Products = await productModel.find({});
    res.render("./pages/index", {Products});
});

router.get("/test",async (req, res) => {
    res.render("./auth/auth.ejs");
    // res.send("./auth/auth")
});



module.exports = router;
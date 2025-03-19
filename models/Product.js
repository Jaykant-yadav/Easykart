const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
    productTitle: {
        type: String,
        required: true,
    },
    description: String,
    color:{
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    discount: {
        disPrice: {
            type: Number,
            // required: true,
        },
        offPer: {
            type: Number,
        }
    },
    size: {
        type: String,
        required: true,
    },
    brandName: {
        type: String,
    },
    image: {
        url: String,
        filename: String,
    },
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
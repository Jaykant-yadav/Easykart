const mongoose = require('mongoose');
const Product = require("../models/Product.js");
const ecommerceData = require("./productDetails.js");

main()
.then(() => {
    console.log("database connected...")
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Easykart');
}

const initDB = async () => {
    await Product.deleteMany({});
    await Product.insertMany(ecommerceData.data);
    console.log("data was initialize");
}

initDB();
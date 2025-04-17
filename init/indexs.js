const mongoose = require('mongoose');
const Product = require("../models/productModel.js");
const ecommerceData = require("./productDetails.js");

main()
.then(() => {
    console.log("database connected...")
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Easykart');
}

// Migration Function to add releaseDate
async function addReleaseDateMigration() {
  try {
    await Product.updateMany(
      {},
      { $set: { releaseDate: new Date() } }
    );
    console.log("Release date added to all documents.");
  } catch (error) {
    console.error("Error adding release date:", error);
  }
}

const initDB = async () => {
    await Product.deleteMany({});
    await Product.insertMany(ecommerceData.data);
    console.log("data was initialize");
    await addReleaseDateMigration(); // Run the migration after initialization
}

initDB();
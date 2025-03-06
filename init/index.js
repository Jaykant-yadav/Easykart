const mongoose = require('mongoose');
const chat = require("../models/chat.js");
const initData = require("./data.js");

main()
.then(() => {
    console.log("database connected...")
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/opinionshare');
}

const initDB = async () => {
    await chat.deleteMany({});
    await chat.insertMany(initData.data);
    console.log("data was initialize");
}

initDB();
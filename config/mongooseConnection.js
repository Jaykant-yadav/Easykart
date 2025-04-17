const mongoose = require("mongoose");
const config = require("config");
const dbgr = require("debug")("development:mongoose")


//database connectivity
main()
.then(() => {
    console.log("database connected...")
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect(`${config.get("MONGODB_URL")}/Easykart`);
}

module.exports = mongoose.connection;
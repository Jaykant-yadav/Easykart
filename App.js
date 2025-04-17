const express = require("express");
const app = express();
const path = require('path');
const ejsMate = require("ejs-mate");


const dbInit = require("./config/mongooseConnection");

const router = require("./routes/index.js");

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.engine('ejs', ejsMate);

app.use("/", router);

let port = 8080;
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})

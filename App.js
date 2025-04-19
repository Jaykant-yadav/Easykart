const express = require("express");
const app = express();
const path = require('path');
const ejsMate = require("ejs-mate");
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const flash = require('connect-flash');

require("dotenv").config();

const dbInit = require("./config/mongooseConnection");

const indexRouter = require("./routes/index.js");
const productRouter = require("./routes/productRouter.js");
const userRouter = require("./routes/userRouter.js");

app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());
app.use(
    expressSession({
        resave: false,
        saveUninitialized: false,
        secret: process.env.EXPRESS_SESSION_SECRET,
    })
);
app.use(flash());
app.set("view engine", "ejs");
app.engine('ejs', ejsMate);

app.use("/", indexRouter);
app.use("/products", productRouter);
app.use("/users", userRouter);

let port = 8080;
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})

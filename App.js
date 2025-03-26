//All PACKAGE Require
if(process.env.NODE_ENV != "production") {
    require('dotenv').config();
};
const express = require("express");
const app = express();
const path = require("path");
const ejsMate = require("ejs-mate");
const mongoose = require("mongoose");
const products = require("./models/Product.js");
const methodOverride = require('method-override');
const multer = require("multer");
const {storage} = require("./cloudConfig.js");
const upload = multer({ storage });

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.engine('ejs', ejsMate);


//database connectivity
main()
.then(() => {
    console.log("database connected...")
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Easykart');
}

//Set up multer to store files in /uploads folder
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, '/uploads');
//     },
//     filename: function (req, file, cb) {
//         const uniqueSuffix = Date.now();
//         cb(null, uniqueSuffix + '-' + file.originalname);
//       }
//     })
    
//     const upload = multer({ storage: storage });

//REST API

//index Route
app.get("/easykart", async (req, res) => {
    const Products = await products.find({});
    res.render("./ecommerce/index.ejs", {Products});
});


//New Route
app.get("/products/new", (req, res) => {
    res.render("./ecommerce/addNewproduct.ejs");
});

// Testing 
app.get('/easykart', async (req, res) => {
    try {
      const categories = await products.find({}); // Fetch all categories
      const categoriesWithProducts = [];
  
      for (const category of categories) {
        const product = await products.findById(id).limit(5); // Fetch 5 products per category
        categoriesWithProducts.push({
          category: category,
          products: product,
        });
      }
  
      res.render("./ecommerce/index.ejs", { categories: categoriesWithProducts });
    } catch (error) {
      console.error(error);
      res.status(500).send('Error fetching categories and products');
    }
  });

//Deshboard
// app.get("/deshboard", async (req, res) => {
//     const AllChat = await Chat.find({});
//     res.render("./includes/deshboard.ejs", {AllChat});
// });

// Show Route
app.get("/products/:id", async (req, res) => {
    let {id} = req.params;
    // console.log(id);
    const Products = await products.findById(id);
    res.render("./ecommerce/productShow.ejs", {Products});
});

//Create Route
app.post("/products",upload.single('product[image]'), async(req, res) => {
    let url = req.file.path;
    let filename = req.file.filename;
    // console.log(url, "..", filename);
    let newProduct = new products(req.body.product);
    newProduct.image = {url, filename};
    await newProduct.save();
    // console.log(newProduct);
    res.redirect("/easykart");
        // res.send(req.file);
});

// app.post(upload.single('listing[image]'),(req, res) => {
//     res.send(req.file);
// });

//Edit Route
// app.get("/chats/:id/edit", async(req, res) => {
//     let {id} = req.params;
//     const chats = await Chat.findById(id);
//     res.render("./openion/edit.ejs", {chats});
// });

//Update Route
// app.put("/chats/:id", async (req, res) => {
//     let {id} = req.params;
//     await Chat.findByIdAndUpdate(id, {...req.body.chat});
//     res.redirect(`/chats/${id}`);
// });

//Delete Route
// app.delete("/chats/:id", async(req, res) => {
//     let {id} = req.params;
//     let deletedPost = await Chat.findByIdAndDelete(id);
//     console.log(deletedPost);
//     res.redirect("/chats");
// })


/* 
app.get("/testChat", async (req, res) => {
    let sampleChat = new Chat({
        title: 'Tech Discussion',
        image: 'https://example.com/images/tech.jpg',
        description: 'Discussing the latest tech trends.',
        category: 'Technology',
        profileImage: 'https://example.com/images/tech-group.png',
        location: 'Silicon Valley',
        country: 'USA',
        // users: [user1Id, user2Id],
        // messages: [{ sender: user1Id, content: 'What are your thoughts on AI?' }],
    })

    await sampleChat.save();
    console.log("sample was saved");
    res.send("success testing");
}) */

//SERVER LISTEN
app.listen(3000, () => {
    console.log("server is listen port: 3000");
})


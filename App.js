//All PACKAGE Require
const express = require("express");
const app = express();
const path = require("path");
const ejsMate = require("ejs-mate");
const mongoose = require("mongoose");
const Chat = require("./models/chat.js");
const methodOverride = require('method-override');

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
  await mongoose.connect('mongodb://127.0.0.1:27017/opinionshare');
}

//REST API

//index Route
app.get("/chats", async (req, res) => {
    const AllChat = await Chat.find({});
    res.render("./openion/indexs.ejs", {AllChat});
});


//New Route
app.get("/chats/new", (req, res) => {
    res.render("./openion/new.ejs")
});

//Show Route
app.get("/chats/:id", async (req, res) => {
    let {id} = req.params;
    const chats = await Chat.findById(id);
    res.render("./openion/show.ejs", {chats});
});

//Create Route
app.post("/chats", async(req, res) => {
    const newChat = new Chat(req.body.chat);
    await newChat.save();
    res.redirect("/chats")
});

//Edit Route
app.get("/chats/:id/edit", async(req, res) => {
    let {id} = req.params;
    const chats = await Chat.findById(id);
    res.render("./openion/edit.ejs", {chats});
});

//Update Route
app.put("/chats/:id", async (req, res) => {
    let {id} = req.params;
    await Chat.findByIdAndUpdate(id, {...req.body.chat});
    res.redirect(`/chats/${id}`);
});

//Delete Route
app.delete("/chats/:id", async(req, res) => {
    let {id} = req.params;
    let deletedPost = await Chat.findByIdAndDelete(id);
    console.log(deletedPost);
    res.redirect("/chats");
})


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


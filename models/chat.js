const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const chatSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        type: String,
        default: "https://plus.unsplash.com/premium_photo-1685086785636-2a1a0e5b591f?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        set: (v) => v === "" ? "https://plus.unsplash.com/premium_photo-1685086785636-2a1a0e5b591f?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" : v,
    },
    category: String,
    profileImage: String,
    location: String,
    country: String,
    // users: String,
    // messages: String,
});

const Chat = mongoose.model("Chat", chatSchema);
module.exports = Chat;
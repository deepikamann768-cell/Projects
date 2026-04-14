const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// ✅ Connect MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/outproDB")
  .then(() => console.log("MongoDB Connected ✅"))
  .catch(err => console.log(err));

// ✅ Schema
const ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String
});

// ✅ Model
const Contact = mongoose.model("Contact", ContactSchema);

// ✅ Route
app.post("/contact", async (req, res) => {
  try {
    const newMessage = new Contact(req.body);
    await newMessage.save();
    res.send("Message Saved Successfully ✅");
  } catch (err) {
    res.status(500).send("Error saving message ❌");
  }
});

// ✅ Server
app.listen(5000, () => {
  console.log("Server running on port 5000 🚀");
});
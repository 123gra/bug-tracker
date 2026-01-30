const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  text: String,
  ticket: { type: mongoose.Schema.Types.ObjectId, ref: "Ticket" },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
});

module.exports = mongoose.model("Comment", commentSchema);

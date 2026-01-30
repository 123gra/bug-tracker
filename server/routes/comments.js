const router = require("express").Router();
const Comment = require("../models/Comment");
const auth = require("../middleware/authMiddleware");

router.post("/:ticketId", auth, async (req, res) => {
  const comment = await Comment.create({
    text: req.body.text,
    ticket: req.params.ticketId,
    user: req.user.id
  });
  res.json(comment);
});

router.get("/:ticketId", auth, async (req, res) => {
  const comments = await Comment.find({
    ticket: req.params.ticketId
  }).populate("user", "email");
  res.json(comments);
});

module.exports = router;

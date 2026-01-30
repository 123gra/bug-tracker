const router = require("express").Router();
const Ticket = require("../models/Ticket");
const auth = require("../middleware/authMiddleware");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

router.post("/", auth, upload.single("file"), async (req, res) => {
  const ticket = await Ticket.create({
    ...req.body,
    createdBy: req.user.id,
    attachment: req.file?.path
  });
  res.json(ticket);
});

router.get("/:projectId", auth, async (req, res) => {
  const tickets = await Ticket.find({
    project: req.params.projectId
  }).populate("assignedTo", "email");
  res.json(tickets);
});

router.patch("/:id", auth, async (req, res) => {
  const ticket = await Ticket.findById(req.params.id);
  if (ticket.createdBy.toString() !== req.user.id)
    return res.status(403).json("Forbidden");

  Object.assign(ticket, req.body);
  await ticket.save();
  res.json(ticket);
});

router.delete("/:id", auth, async (req, res) => {
  await Ticket.findByIdAndDelete(req.params.id);
  res.json("Deleted");
});

module.exports = router;

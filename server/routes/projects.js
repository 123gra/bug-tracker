const router = require("express").Router();
const Project = require("../models/Project");
const auth = require("../middleware/authMiddleware");

router.post("/", auth, async (req, res) => {
  const project = await Project.create({
    name: req.body.name,
    owner: req.user.id,
    members: [req.user.id]
  });
  res.json(project);
});

router.get("/", auth, async (req, res) => {
  const projects = await Project.find({
    members: req.user.id
  });
  res.json(projects);
});

module.exports = router;

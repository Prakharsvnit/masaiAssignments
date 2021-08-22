const express = require("express");
const router = express.Router();

const Section = require("../models/section.model");
router.post("/", async (req, res) => {
  try {
    const section = await Section.create(req.body);
    return res.status(201).send(section);
  } catch (err) {
    return res.send(section);
  }
});

router.get("/", async function (req, res) {
  try {
    const sections = await Section.find().lean().exec();
    return res.status(200).send(sections);
  } catch (err) {
    return res.status(400).send(err.message);
  }
});

router.delete("/:id", async function (req, res) {
  try {
    const section = await Section.findByIdAndDelete(req.params.id).lean().exec();
    return res.send("section deleted successfully");
  } catch (err) {
    return res.status(400).send(err.message);
  }
});

module.exports = router;

const express = require("express");
const router = express.Router();

const Author = require("../models/author.model");
router.post("/", async (req, res) => {
  try {
    const author = await Author.create(req.body);
    return res.status(201).send(author);
  } catch (err) {
    return res.send(author);
  }
});

router.get("/", async function (req, res) {
  try {
    const authors = await Author.find().lean().exec();
    return res.status(200).send(authors);
  } catch (err) {
    return res.status(400).send(err.message);
  }
});

router.delete("/:id", async function (req, res) {
  try {
    const author = await Author.findByIdAndDelete(req.params.id).lean().exec();
    return res.status(205).json({ author: author });
  } catch (err) {
    return res.status(400).send(err.message);
  }
});

router.get("/:id/books",async function(req, res) {
    try{
        const booksByAuthor = await Book.findById(req.params.id).lean().exec();
        return res.send(booksByAuthor);
    }catch (err) {
        return res.send(err.message);
    }
})

module.exports = router;

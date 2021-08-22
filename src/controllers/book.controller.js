const express = require('express');
const router = express.Router();

const Book = require("../models/book.model");

router.post("/", async (req, res) => {
    try{
    const book = await Book.create(req.body);
    return res.status(201).send(book);
    }catch(err){
    return res.send(book);
    }
  });

  router.get("/", async function (req, res) {
      try{
          const books = await Book.find().lean().exec();
          return res.status(200).send(books);
      }catch(err){
          return res.status(400).send(err.message)
      }      
  });

  router.delete("/:id",async function(req, res){
    try{
        const book = await Book.findByIdAndDelete(req.params.id).lean().exec();
        return res.send("Book deleted successfully");
    }catch(err){
        return res.status(400).send(err.message);
    }
})



module.exports = router;
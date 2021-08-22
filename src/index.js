const express = require("express");
const connect = require("./configs/db");

const bookController = require("./controllers/book.controller");
const authorController = require("./controllers/author.controller");
const sectionController = require("./controllers/section.controller");

const app = express();

app.use(express.json());

app.use("/books",bookController);
app.use("/authors",authorController);
app.use("/sections",sectionController);

app.listen(2345, async () => {
    await connect();
    console.log("listening on port 2345");
  });
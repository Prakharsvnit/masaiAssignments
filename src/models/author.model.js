const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema(
    {
      firstName: String,
      lastName: String,
    },
    {
      versionKey: false,
    }
  );

const Authors = mongoose.model("author", authorSchema); // users collection in mongoDB


module.exports = Authors;
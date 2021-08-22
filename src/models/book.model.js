const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema(
{
    bookName: String,
    bookBody: String,
    authorIds: [
        {
        type : mongoose.Schema.Types.ObjectId,
        ref:"author",
        required: true,
        }
    ]
},
{
    versionKey:false
}
);

const Books = mongoose.model("book", bookSchema); // users collection in mongoDB


module.exports = Books;


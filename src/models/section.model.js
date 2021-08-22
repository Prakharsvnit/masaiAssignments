const mongoose = require('mongoose');

const sectionSchema = new mongoose.Schema(
{
    sectionName: String,
    bookIds: [
        {
        type : mongoose.Schema.Types.ObjectId,
        ref:"book",
        required: true,
        }
    ]
},
{
    versionKey:false
}
);

const Sections = mongoose.model("section", sectionSchema); // users collection in mongoDB


module.exports = Sections;
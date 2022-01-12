let mongoose = require("mongoose")


const AuthorSchema = new mongoose.Schema({
    name: { type: String, trim: true },
    biography: { type: String, trim: true },
    img: { type: String },
    birthDate: { type: Date },
    email: { type: String },
    active: { type: Boolean, default: true }
})

const Author = mongoose.model("Author", AuthorSchema);
module.exports = Author;




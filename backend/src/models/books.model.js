let mongoose = require("mongoose")


const BookSchema = new mongoose.Schema({
    title: { type: String, trim: true },
    description: { type: String, trim: true },
    img: { type: String },
    pages: { type: Number },
    price: { type: Number },
    publisher_id: mongoose.Types.ObjectId,
    active: { type: Boolean, default: true }
})

const Book = mongoose.model("Book", BookSchema);
module.exports = Book;



let mongoose = require("mongoose")


const AuthBooksSchema = new mongoose.Schema({
    author_Id: mongoose.Types.ObjectId,
    book_Id: mongoose.Types.ObjectId,
})

const AuthBooks = mongoose.model("AuthBooks", AuthBooksSchema);
module.exports = AuthBooks;




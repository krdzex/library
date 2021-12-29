import mongoose from "mongoose"


const AuthBooks = new mongoose.Schema({
    author_Id: mongoose.Types.ObjectId,
    book_Id: mongoose.Types.ObjectId,
})

export default mongoose.model("AuthBooks", AuthBooks)



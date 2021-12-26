import mongoose from "mongoose"


const BookSchema = new mongoose.Schema({
    title: { type: String, trim: true },
    description: { type: String, trim: true },
    img: { type: String },
    pages: { type: Number },
    price: { type: Number },
    publisher_id: Schema.Types.ObjectId,
    active: { type: Boolean, default: true }
})

export default mongoose.model("Book", BookSchema)



import mongoose from "mongoose"


const AuthorSchema = new mongoose.Schema({
    name: { type: String, trim: true },
    biography: { type: String, trim: true },
    img: { type: String },
    birthDate: { type: Date },
    email: { type: String },
    active: { type: Boolean, default: true }
})

export default mongoose.model("Author", AuthorSchema)



import mongoose from "mongoose"


const PublisherSchema = new mongoose.Schema({
    name: { type: String, trim: true },
    title: { type: String, trim: true },
    title: { type: String, trim: true },
    title: { type: String, trim: true },
    title: { type: String, trim: true },

})

export default mongoose.model("Publisher", PublisherSchema)



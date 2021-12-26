import mongoose from "mongoose"


const PublisherSchema = new mongoose.Schema({
    title: { type: String, trim: true },

})

export default mongoose.model("Publisher", PublisherSchema)



import mongoose from "mongoose"


const PublisherSchema = new mongoose.Schema({
    name: { type: String, trim: true },
    address: { type: String, trim: true },

})

export default mongoose.model("Publisher", PublisherSchema)



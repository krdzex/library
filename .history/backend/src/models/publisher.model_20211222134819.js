import mongoose from "mongoose"


const PublisherSchema = new mongoose.Schema({
    name: { type: String, trim: true },
    address: { road: String, zipCode: String,city: String, },

})

export default mongoose.model("Publisher", PublisherSchema)



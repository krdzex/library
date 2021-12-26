import mongoose from "mongoose"


const PublisherSchema = new mongoose.Schema({
    name: { type: String, trim: true },
    address: { road: String, zipCode: String,city: String,Country:  },

})

export default mongoose.model("Publisher", PublisherSchema)



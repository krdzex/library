let mongoose = require("mongoose")


const PublisherSchema = new mongoose.Schema({
    name: { type: String, trim: true },
    address: { road: String, zipCode: String, city: String, country: String },
    active: { type: Boolean, default: true }
})

const Publisher = mongoose.model("Publisher", PublisherSchema);
module.exports = Publisher;




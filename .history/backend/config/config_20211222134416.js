require("dotenv").config()
const config = {
    port: process.env.PORT || 4400,
    jwtSecret: process.env.JWT_SECRET ||  "YOUR_secret_key",
    mongoUri: process.env.MONGO || MONGO=mongodb+srv://Paragon004:!400nogaraP$@cluster0.0smy7.mongodb.net/thirtyFive?retryWrites=true&w=majority
}
export default config;
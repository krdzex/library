import config from "../config/config"
import app from "./express"
import mongoose from "mongoose"
import Template from "../template"
import { seedUsers } from "../seeder"


mongoose.Promise = global.Promise;
mongoose.connect(config.mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("MongoDB connected")
    seedUsers()
}).catch(() => console.log("Error connecting on MongoDB"))

app.listen(config.port, (err) => {
    if (err) {
        console.log(err)
    }
    console.log("Server started on port: " + config.port)
})

app.get("/", (req, res) => {
    res.status(200).send(Template())
})


let mongoose = require("mongoose")

let crypto = require("crypto")

const UserSchema = new mongoose.Schema({
    name: { type: String },
    userName: { type: String, trim: true },
    hashed_password: {
        type: String,
        trim: true
    },
    role: { type: String },
    salt: String,
})

UserSchema.virtual("password").set(function (password) {
    this._password = password;
    this.salt = this.makeSalt();

    this.hashed_password = this.encryptPassword(password)
})

UserSchema.methods = {
    authenticate: function (plainText) {
        return this.encryptPassword(plainText) === this.hashed_password
    },
    encryptPassword: function (password) {
        if (!password) return ""
        try {
            return crypto.createHmac("sha1", this.salt).update(password).digest("hex")
        } catch (error) {
            return ""
        }
    },
    makeSalt: function () {
        return Math.round((new Date().valueOf() * Math.random())) + ""
    }
}

const User = mongoose.model("User", UserSchema);
module.exports = User;



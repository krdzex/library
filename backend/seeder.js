
let Author = require("./src/models/authors.model")
let Publishers = require("./src/models/publisher.model")
let Book = require("./src/models/books.model")
let AuthBook = require("./src/models/authBooks.model")
let User = require("./src/models/user.model")
let books = require("./data/books")
let authors = require("./data/authors")
let publishers = require("./data/publishers")
let authBooks = require("./data/authBooks")
let users = require("./data/users")
let config = require("./config/config")
let mongoose = require("mongoose")



const coonectDataBase = () => {
	mongoose.Promise = global.Promise;
	mongoose.connect(config.mongoUri, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	}).then(() => {
		console.log("MongoDB connected")
		seedUsers()
	}).catch(() => console.log("Error connecting on MongoDB"))
}
const seedUsers = async () => {
	try {
		await Author.deleteMany()
		await Author.insertMany(authors)
		await Publishers.deleteMany()
		await Publishers.insertMany(publishers)
		await Book.deleteMany()
		await Book.insertMany(books)
		await AuthBook.deleteMany()
		await AuthBook.insertMany(authBooks)
		await User.deleteMany()
		await User.insertMany(users)
		console.log("Database is seeded successfully")
		process.exit();
	} catch (error) {
		console.log(error)
	}
}

coonectDataBase()

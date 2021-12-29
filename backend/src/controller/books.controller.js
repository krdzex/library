import Book from "../models/books.model"
import AuthBook from "../models/authBooks.model"
import _ from "lodash"
import fs from "fs"
import { promisify } from "util";
import bookValidation from "../validations/book"

const createBook = async (req, res) => {
    const deleteImg = promisify(fs.unlink)
    if (req.file !== undefined) {
        req.body.img = req.file.filename;
    } else {
        req.body.img = "";
    }
    const { errors, isValid } = bookValidation(req.body);
    const book = new Book(req.body);
    if (!isValid) {
        if (book.img !== "") {
            deleteImg(`../frontend/public/images/${book.img}`)
        }
        return res.status(400).json(errors)
    }

    let result = await book.save()

    if (req.body.authorBooks !== undefined) {
        if (Array.isArray(req.body.authorBooks)) {
            const authBookData = req.body.authorBooks.map((data, id) => {
                return { book_Id: result._id, author_Id: data }
            })
            await AuthBook.insertMany(authBookData)
        } else {
            const authBookData = { book_Id: result._id, author_Id: req.body.authorBooks }
            await AuthBook.insertMany(authBookData)
        }
    }
    res.status(200).json({
        message: "Successfully created book!"
    })
}


const listBooks = (req, res) => {
    Book.find({ active: true }).select("_id title pages price").then(books => {
        res.status(200).json(books)
    })
}


const booksInformations = async (req, res) => {
    let id = req.params.bookId;
    let authorsBooks = await AuthBook.find({ book_Id: id });
    let books = await Book.findById(id)
    res.status(200).json({ bookInfo: books, authors: authorsBooks })
}


const updateBook = async (req, res) => {
    const deleteImg = promisify(fs.unlink)
    let id = req.params.bookId;
    let book = await Book.findById(id)
    let originalImg = book.img;
    if (req.file !== undefined) {
        req.body.img = req.file.filename;
    } else {
        req.body.img = book.img;
    }
    const { errors, isValid } = bookValidation(req.body);
    if (!isValid) {
        if (req.file !== undefined) {
            deleteImg(`../frontend/public/images/${book.img}`)
        }
        return res.status(400).json(errors)
    }
    book = _.extend(book, req.body)
    if (req.file !== undefined) {
        deleteImg(`../frontend/public/images/${originalImg}`)
        book = _.extend(book, { img: req.file.filename })
    }


    if (req.body.authorBooks !== undefined) {
        if (Array.isArray(req.body.authorBooks)) {
            const authBookData = req.body.authorBooks.map((data, id) => {
                return { book_Id: req.body.book, author_Id: data }
            })
            await AuthBook.insertMany(authBookData)
        } else {
            const authBookData = { book_Id: req.body.book, author_Id: req.body.authorBooks }
            await AuthBook.insertMany(authBookData)
        }
    }

    await AuthBook.deleteMany({ _id: { $in: req.body.authorsToDelete } })

    book.save().then(res.json({ message: "Successfuly edited book" })).catch(err => console.log(err))
}

const deleteBook = async (req, res) => {

    let id = req.params.bookId;
    let book = await Book.findById(id)
    book = _.extend(book, { active: false })
    book.save().then(res.json({ message: "Successfuly deleted book" })).catch(err => console.log(err))
}

const searchedBooks = (req, res) => {
    let bookTitle = req.params.filter;
    Book.find({ title: { $regex: new RegExp(`${bookTitle}`, 'i') }, active: true }).select("_id title pages price").then(publishers => {
        res.status(200).json(publishers)
    })
}


export default { createBook, listBooks, booksInformations, updateBook, deleteBook, searchedBooks }
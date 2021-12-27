import Book from "../models/books.model"
import errorHandler from "../helpers/dbErrorHandler"
import _ from "lodash"
import fs from "fs"
import { promisify } from "util";
import bookValidation from "../validations/book"

const createBook = (req, res) => {
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

    book.save((err, result) => {
        if (err) {
            return res.status(400).json(
                errorHandler.getUniqueErrorMessage(err)
            )
        }
        res.status(200).json({
            message: "Successfully created book!"
        })
    })
}


const listBooks = (req, res) => {
    Book.find({ active: true }).select("_id title pages price").then(books => {
        res.status(200).json(books)
    })
}


const booksInformations = (req, res) => {
    let id = req.params.bookId;
    Book.findById(id).then(info => {
        res.status(200).json(info)
    }).catch(err => console.log(err))
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
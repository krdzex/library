import Book from "../models/books.model"
import errorHandler from "../helpers/dbErrorHandler"
import _ from "lodash"
import fs from "fs"
import { promisify } from "util";


const createBook = (req, res) => {
    //const { errors, isValid } = validateSignUp(req.body);

    if (req.file !== undefined) {
        req.body.img = req.file.filename;
    } else {
        req.body.img = "";
    }


    const book = new Book(req.body);
    // if (!isValid) {
    //     return res.status(400).json(errors)
    // }

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
    Book.find().select("_id title pages price").then(books => {
        res.status(200).json(books)
    })
}


const booksInformations = (req, res) => {
    let id = req.params.publisherId;
    Book.findById(id).then(info => {
        res.status(200).json(info)
    }).catch(err => console.log(err))
}


const updateBook = async (req, res) => {
    let id = req.params.publisherId;
    let book = await Book.findById(id)
    book = _.extend(book, req.body)
    book.save().then(res.json({ message: "Successfuly edited book" })).catch(err => console.log(err))
}


export default { createBook, listBooks, booksInformations, updateBook }
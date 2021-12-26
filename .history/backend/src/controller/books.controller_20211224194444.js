import Book from "../models/books.model"
import errorHandler from "../helpers/dbErrorHandler"
import _ from "lodash"



const createbook = (req, res) => {
    //const { errors, isValid } = validateSignUp(req.body);
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
    Book.find().select("_id title pages price").then(publishers => {
        res.status(200).json(publishers)
    })
}


const booksInformations = (req, res) => {
    let id = req.params.publisherId;
    Publisher.findById(id).then(user => {
        res.status(200).json(user)
    }).catch(err => console.log(err))
}


const updateBook = async (req, res) => {
    let id = req.params.publisherId;
    let publisher = await Publisher.findById(id)
    publisher = _.extend(publisher, req.body)
    publisher.save().then(res.json({ message: "Successfuly edited publisher" })).catch(err => console.log(err))
}


export default { createPublisher, listPublishers, publisherInfo,updatePublisher }
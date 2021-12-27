import Author from "../models/authors.model"
import errorHandler from "../helpers/dbErrorHandler"
import _ from "lodash"
import fs from "fs"
import { promisify } from "util";
import validateAuthor from "../validations/author"

const createAuthor = (req, res) => {
    if (req.file !== undefined) {
        req.body.img = req.file.filename;
    } else {
        req.body.img = "";
    }
    const { errors, isValid } = validateAuthor(req.body);
    const author = new Author(req.body);

    if (!isValid) {
        if (author.img !== "") {
            deleteImg(`../frontend/public/images/${author.img}`)
        }
        return res.status(400).json(errors)
    }

    author.save((err, result) => {
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


const listAuthors = (req, res) => {
    Author.find({ active: true }).select("_id name img birthDate email").then(authors => {
        res.status(200).json(authors)
    })
}


const authorInformation = (req, res) => {
    let id = req.params.authorsId;
    Author.findById(id).then(info => {
        res.status(200).json(info)
    }).catch(err => console.log(err))
}


const updateAuthor = async (req, res) => {
    const deleteImg = promisify(fs.unlink)
    let id = req.params.authorsId;
    let author = await Author.findById(id)
    let originalImg = author.img;
    if (req.file !== undefined) {
        req.body.img = req.file.filename;
    } else {
        req.body.img = author.img;
    }
    const { errors, isValid } = validateAuthor(req.body);
    if (!isValid) {
        if (req.file !== undefined) {
            deleteImg(`../frontend/public/images/${author.img}`)
        }
        return res.status(400).json(errors)
    }
    author = _.extend(author, req.body)
    if (req.file !== undefined) {
        deleteImg(`../frontend/public/images/${originalImg}`)
        author = _.extend(author, { img: req.file.filename })
    }

    author.save().then(res.json({ message: "Successfuly edited author" })).catch(err => console.log(err))
}

const deleteAuthor = async (req, res) => {

    let id = req.params.authorsId;
    let author = await Author.findById(id)
    author = _.extend(author, { active: false })
    author.save().then(res.json({ message: "Successfuly deleted author" })).catch(err => console.log(err))
}

const searchedAuthors = (req, res) => {
    let authorName = req.params.filter;
    Author.find({ name: { $regex: new RegExp(`${authorName}`, 'i') }, active: true }).select("_id name img birthDate email").then(publishers => {
        res.status(200).json(publishers)
    })
}


export default { createAuthor, listAuthors, authorInformation, updateAuthor, deleteAuthor, searchedAuthors }
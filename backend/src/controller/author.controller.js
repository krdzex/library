import Author from "../models/authors.model"
import _ from "lodash"
import fs from "fs"
import { promisify } from "util";
import validateAuthor from "../validations/author"
import AuthBook from "../models/authBooks.model"

const createAuthor = async (req, res) => {
    try {
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

        let result = await author.save()


        if (req.body.authorBooks !== undefined) {
            if (Array.isArray(req.body.authorBooks)) {
                const authBookData = req.body.authorBooks.map((data, id) => {
                    return { author_Id: result._id, book_Id: data }
                })
                await AuthBook.insertMany(authBookData)
            } else {
                const authBookData = { author_Id: result._id, book_Id: data }
                await AuthBook.insertMany(authBookData)
            }
        }
        res.status(200).json({
            message: "Successfully created book!"
        })
    } catch (error) {
        console.log(error)
    }

}


const listAuthors = (req, res) => {
    Author.find({ active: true }).select("_id name img birthDate email").then(authors => {
        res.status(200).json(authors)
    })
}


const authorInformation = async (req, res) => {
    try {
        let id = req.params.authorsId;
        let authorInfo = await Author.findById(id)
        let authorsBooks = await AuthBook.find({ author_Id: id });
        res.status(200).json({ authorInfo: authorInfo, booksInfo: authorsBooks })
    } catch (error) {
        console.log(error)
    }



}


const updateAuthor = async (req, res) => {
    try {
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
        if (req.body.authorBooks !== undefined) {
            if (Array.isArray(req.body.authorBooks)) {
                const authBookData = req.body.authorBooks.map((data, id) => {
                    return { author_Id: req.body.author, book_Id: data }
                })
                await AuthBook.insertMany(authBookData)
            } else {
                const authBookData = {
                    author_Id: req.body.author, book_Id: req.body.authorBooks
                }
                await AuthBook.insertMany(authBookData)
            }
        }
        await AuthBook.deleteMany({ _id: { $in: req.body.booksToDelete } })
        author.save().then(res.json({ message: "Successfuly edited author" })).catch(err => console.log(err))
    } catch (error) {
        console.log(error)
    }

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
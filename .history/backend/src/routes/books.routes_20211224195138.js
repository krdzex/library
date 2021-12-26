import express from "express";
import bookController from "../controller/books.controller";
import multer from "multer";

const router = express.Router()

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "../frontend/public/images");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname)
    }
})
const upload = multer({ storage: storage })


router.route("/api/books").post(upload.single("img")bookController.createBook).get(bookController.listBooks)
router.route("/api/books/:bookId").get(bookController.booksInformations).put(bookController.updateBook)






export default router;
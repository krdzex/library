import express from "express";
import bookController from "../controller/books.controller";

const router = express.Router()

router.route("/api/books").post(bookController.createBook).get(bookController.listBooks)
router.route("/api/books/:bookId").get(bookController.publisherInfo).put(bookController.updatePublisher)






export default router;
import express from "express";
import bookController from "../controller/publisbookher.controller";

const router = express.Router()

router.route("/api/books").post(bookController).get(bookController.listPublishers)
router.route("/api/books/:bookId").get(bookController.publisherInfo).put(bookController.updatePublisher)






export default router;
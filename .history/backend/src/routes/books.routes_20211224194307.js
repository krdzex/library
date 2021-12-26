import express from "express";
import bookController from "../controller/publisbooher.controller";

const router = express.Router()

router.route("/api/books").post(publisherController.createPublisher).get(publisherController.listPublishers)
router.route("/api/books/:bookId").get(publisherController.publisherInfo).put(publisherController.updatePublisher)






export default router;
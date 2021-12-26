import express from "express";
import publisherController from "../controller/publisher.controller";

const router = express.Router()

router.route("/api/books").post(publisherController.createPublisher).get(publisherController.listPublishers)
router.route("/api/books/:publisherId").get(publisherController.publisherInfo).put(publisherController.updatePublisher)






export default router;
import express from "express";
import publisherController from "../controller/publisher.controller";

const router = express.Router()

router.route("/api/publishers").post(publisherController.createPublisher).get(publisherController.listPublishers)
router.route("/api/publishers/:publisherId").get(publisherController.listPublishers)






export default router;
import express from "express";
import publisherController from "../controller/publisher.controller";

const router = express.Router()

router.route("/api/publishers").post(publisherController.createPublisher)






export default router;
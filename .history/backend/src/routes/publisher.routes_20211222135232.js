import express from "express";
import publisherController from "../controller/publisher.controller";

const router = express.Router()

router.route("/api/publisher").post(upload.single("img"), courseController.createCourse).get(courseController.listCourses)






export default router;
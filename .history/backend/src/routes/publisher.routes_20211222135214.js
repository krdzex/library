import express from "express";
import publisherController from "../controller/publisher.controller";

const router = express.Router()

router.route("/course").post(upload.single("img"), courseController.createCourse).get(courseController.listCourses)
router.route("/course/delete/:courseId").put(courseController.deleteCourse)
router.route("/course/:courseId").get(courseController.courseInfo).put(upload.single("img"),courseController.updateCourse)
router.route("/courses/user/:userId").get(courseController.getUserCourses)
router.route("/courses/title/:titleName").get(courseController.listCoursesByTitle)
router.route("/courses/enroll/:courseId").put(courseController.enrollStudent)
router.route("/courses/enrollList/:userId").get(courseController.listEnrolledCourses)
router.route("/courses/complete/:id").put(courseController.completeCourse).get(courseController.noOfCompletedCourses)





export default router;
import Course from "../models/course.model"
import errorHandler from "../helpers/dbErrorHandler"
import validateCourse from "../validations/course"
import _ from "lodash"
import fs from "fs"
import { promisify } from "util";


const createCourse = (req, res) => {
    const deleteImg = promisify(fs.unlink)
    if (req.file !== undefined) {
        req.body.img = req.file.filename;
    } else {
        req.body.img = "";
    }
    const { errors, isValid } = validateCourse(req.body);

    const course = new Course(req.body);

    if (!isValid) {
        if (course.img !== "") {
            deleteImg(`../frontend/public/images/${course.img}`)
        }
        return res.status(400).json(errors)
    }
    course.save((err, result) => {
        if (err) {
            return res.status(400).json(
                errorHandler.getUniqueErrorMessage(err)
            )
        }
        res.status(200).json({
            message: "Successfully created course!"
        })
    })
}

const listCourses = (req, res) => {
    Course.find({ active: true }).then(user => {
        res.status(200).json(user)
    })
}

const getUserCourses = (req, res) => {
    let id = req.params.userId;
    Course.find({
        $and: [{ active: true },
        { $or: [{ author: id }, { coAuthors: id }] }]
    }).then(user => {
        res.status(200).json(user)
    })
}


const courseInfo = (req, res) => {
    let id = req.params.courseId;
    Course.findById(id).then(courses => {
        res.status(200).json(courses)
    })
}




export default { createCourse}
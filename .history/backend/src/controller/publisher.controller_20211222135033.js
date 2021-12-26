import Course from "../models/course.model"
import errorHandler from "../helpers/dbErrorHandler"

import _ from "lodash"



const createCourse = (req, res) => {
    const { errors, isValid } = validateSignUp(req.body);
    const user = new User(req.body);
    if (!isValid) {
        return res.status(400).json(errors)
    }
    user.save((err, result) => {
        if (err) {
            return res.status(400).json(
                errorHandler.getUniqueErrorMessage(err)
            )
        }
        res.status(200).json({
            message: "Successfully created publisher!"
        })
    })
}


export default { createCourse}
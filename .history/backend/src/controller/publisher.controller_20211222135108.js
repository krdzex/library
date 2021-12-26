import Publisher from "../models/publisher.model"
import errorHandler from "../helpers/dbErrorHandler"




const createCourse = (req, res) => {
    //const { errors, isValid } = validateSignUp(req.body);
    const publisher = new Publisher(req.body);
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
import Publisher from "../models/publisher.model"
import errorHandler from "../helpers/dbErrorHandler"




const createP = (req, res) => {
    //const { errors, isValid } = validateSignUp(req.body);
    const publisher = new Publisher(req.body);
    if (!isValid) {
        return res.status(400).json(errors)
    }
    publisher.save((err, result) => {
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
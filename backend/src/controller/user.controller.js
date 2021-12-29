import User from "../models/user.model"
import errorHandler from "../helpers/dbErrorHandler"



const createUser = (req, res) => {
    const user = new User(req.body);
    user.save((err, result) => {
        if (err) {
            return res.status(400).json(
                errorHandler.getUniqueErrorMessage(err)
            )
        }
        res.status(200).json({
            message: "Successfully created account!"
        })
    })
}





export default { createUser }
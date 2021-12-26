import Publisher from "../models/publisher.model"
import errorHandler from "../helpers/dbErrorHandler"
import _ from "lodash"



const createPublisher = (req, res) => {
    //const { errors, isValid } = validateSignUp(req.body);
    const publisher = new Publisher(req.body);
    // if (!isValid) {
    //     return res.status(400).json(errors)
    // }
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


const listPublishers = (req, res) => {
    Publisher.find().select("_id name address.country").then(publishers => {
        res.status(200).json(publishers)
    })
}


const publisherInfo = (req, res) => {
    let id = req.params.publisherId;
    Publisher.findById(id).then(user => {
        res.status(200).json(user)
    }).catch(err => console.log(err))
}


const updatePublisher = async(req, res) => {
    let id = req.params.publisherId;
    let publisher = await Publisher.findById(id)
    course = _.extend(course, req.body)

}


export default { createPublisher, listPublishers, publisherInfo }
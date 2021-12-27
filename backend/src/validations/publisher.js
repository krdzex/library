import Validator from "validator";
import isEmpty from "is-empty";

module.exports = function validatePublisher(data) {
    let errors = {}

    data.name = !isEmpty(data.name) ? data.name : ""
    data.address.road = !isEmpty(data.address.road) ? data.address.road : ""
    data.address.zipCode = !isEmpty(data.address.zipCode) ? data.address.zipCode : ""
    data.address.city = !isEmpty(data.address.city) ? data.address.city : ""
    data.address.country = !isEmpty(data.address.country) ? data.address.country : ""

    if (Validator.isEmpty(data.name)) {
        errors.name = "Name is required";
    }
    if (Validator.isEmpty(data.address.road)) {
        errors.road = "Road is required";
    }
    if (Validator.isEmpty(data.address.zipCode)) {
        errors.zipCode = "Zip Code is required";
    }
    if (Validator.isEmpty(data.address.city)) {
        errors.city = "City is required";
    }
    if (Validator.isEmpty(data.address.country)) {
        errors.country = "Country is required";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }

}
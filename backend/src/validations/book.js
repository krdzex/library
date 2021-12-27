import Validator from "validator";
import isEmpty from "is-empty";

module.exports = function validateBook(data) {
    let errors = {}
    data.title = !isEmpty(data.title) ? data.title : ""
    data.description = !isEmpty(data.description) ? data.description : ""
    data.img = !isEmpty(data.img) ? data.img : ""
    data.pages = !isEmpty(data.pages) ? data.pages : ""
    data.price = !isEmpty(data.price) ? data.price : ""
    data.publisher_id = !isEmpty(data.publisher_id) ? data.publisher_id : ""


    if (Validator.isEmpty(data.title)) {
        errors.title = "Title is required";
    }
    if (Validator.isEmpty(data.description)) {
        errors.description = "Description is required";
    }
    if (Validator.isEmpty(data.img)) {
        errors.img = "Image is required";
    }
    if (Validator.isEmpty(data.pages) || data.pages === "null") {
        errors.pages = "Pages is required";
    }
    if (Validator.isEmpty(data.price) || data.price === "null") {
        errors.price = "Price is required";
    }
    if (Validator.isEmpty(data.publisher_id)) {
        errors.publisher_id = "Publisher is required";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }

}
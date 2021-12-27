import Validator from "validator";
import isEmpty from "is-empty";

module.exports = function validateAuthor(data) {
    let errors = {}
    data.name = !isEmpty(data.name) ? data.name : ""
    data.biography = !isEmpty(data.biography) ? data.biography : ""
    data.img = !isEmpty(data.img) ? data.img : ""
    data.birthDate = !isEmpty(data.birthDate) ? data.birthDate : ""
    data.email = !isEmpty(data.email) ? data.email : ""


    if (Validator.isEmpty(data.name)) {
        errors.name = "Name is required";
    }
    if (Validator.isEmpty(data.biography)) {
        errors.biography = "Biography is required";
    }
    if (Validator.isEmpty(data.img)) {
        errors.img = "Image is required";
    }
    if (Validator.isEmpty(data.birthDate)) {
        errors.birthDate = "Birth Date is required";
    }
    if (!data.email.match(/^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        errors.email = "Email is invalid";
    }
    if (Validator.isEmpty(data.email)) {
        errors.email = "Email is required";
    }


    return {
        errors,
        isValid: isEmpty(errors)
    }

}
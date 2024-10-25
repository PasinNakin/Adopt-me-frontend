import Joi from "joi";
import validate from "../../../utils/validate";

const editUserSchema = Joi.object({
    firstName: Joi.string()
        .pattern(/^[a-zA-Z]{2,20}$/)
        .required()
        .trim()
        .messages({
            "string.empty": "first name is required",
            "string.pattern.base":
                "first name must be at least 2 characters and contain only letters",
            "any.required": "first name is required",
        }),

    lastName: Joi.string()
        .pattern(/^[a-zA-Z]{2,20}$/)
        .required()
        .trim()
        .messages({
            "string.empty": "last name is required",
            "string.pattern.base":
                "last name must be at least 2 characters and contain only letters",
            "any.required": "last name is required",
        }),

    mobile: Joi.string()
        .pattern(/^[0-9]{10}$/)
        .required()
        .trim()
        .messages({
            "string.empty": "mobile is required",
            "string.pattern.base": "mobile required 10 characters of number",
            "any.required": "mobile is required",
        }),
});
const validateEditUser = (input) => validate(editUserSchema)(input);

export default validateEditUser;

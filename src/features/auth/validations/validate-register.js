import Joi from "joi";
import validate from "../../../utils/validate";

const registerSchema = Joi.object({
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

    email: Joi.string()
        .email({ tlds: { allow: ["com", "net"] } })
        .required()
        .trim()
        .messages({
            "string.empty": "Email is required",
            "string.email": "Invalid email format.",
            "any.required": "Email is required",
        }),

    password: Joi.string()
        .pattern(/^[a-zA-Z0-9]{6,16}$/)
        .required()
        .messages({
            "string.empty": "password is required",
            "string.pattern.base":
                "password must be at least 6 characters and contain only alphabet and number",
            "any.required": "password is required",
        }),
    confirmPassword: Joi.string()
        .required()
        .valid(Joi.ref("password"))
        .messages({
            "string.empty": "confirm password is required",
            "any.only": "password and confirm password did not match",
            "any.required": "confirm password is required",
        })
        .strip(),
});
const validateRegister = (input) => validate(registerSchema)(input);

export default validateRegister;

import Joi from "joi";
import validate from "../../../utils/validate";

const age = ["PUPPY", "ADULT", "SENIOR"];
const gender = ["MALE", "FEMALE"];

const updateDogSchema = Joi.object({
    name: Joi.string().required().trim().messages({
        "string.empty": "name is required",
        "any.required": "name is required",
    }),

    age: Joi.string()
        .valid(...age)
        .required()
        .trim()
        .messages({
            "string.empty": "age is required",
            "any.only": "Wrong type of age",
            "any.required": "age is required",
        }),

    breedId: Joi.number().required().messages({
        "string.empty": "Breed is required",
        "number.base": "Please select one",
        "any.required": "Breed is required",
    }),

    gender: Joi.string()
        .valid(...gender)
        .required()
        .trim()
        .messages({
            "string.empty": "Gender is required",
            "any.only": "Wrong type of Gender",
            "any.required": "Gender is required",
        }),
    description: Joi.string().optional(),
});

const validateUpdateDog = (input) => {
    console.log(input);
    validate(updateDogSchema)(input);
};

export default validateUpdateDog;

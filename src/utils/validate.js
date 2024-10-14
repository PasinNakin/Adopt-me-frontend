const validate = (schema) => (input) => {
    const { error } = schema.validate(input, { abortEarly: false });
    console.dir("error", error); //=log error from validate exp."email is require"
    console.log(error);
    console.log(input);
    if (error) {
        const result = error.details.reduce((acc, el) => {
            acc[el.path[0]] = el.message;
            return acc;
        }, {});

        return result;
    }
};

export default validate;

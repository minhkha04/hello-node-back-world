export const validateBody = (schema) => {
    return (req, res, next) => {
        const { error, value } = schema.validate(req.body, { abortEarly: false });
        if (error) {
            console.log(error)
            return res.status(400).json({
                message: "Validation error",
                details: error.details.map(detail => detail.message)
            });
        }
        req.validatedBody = value; // Optional: nếu muốn dùng dữ liệu sạch
        next();
    };
};

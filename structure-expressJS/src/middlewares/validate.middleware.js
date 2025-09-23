import { errorResponse } from "../utils/response.util.js";
import { BaseError } from "../utils/base-error.util.js";

export const validate = (schema) => {
    return (req, res, next) => {
        const { error, value } = schema.validate(req.body, { abortEarly: false });
        if (error) {
            // gom lỗi chi tiết
            const details = error.details.map((err) => ({
                field: err.path.join("."),
                message: err.message,
            }));

            // tạo BaseError để errorResponse xử lý
            const validationError = new BaseError(400, "Dữ liệu không hợp lệ", details);

            return errorResponse(res, validationError, 400);
        }

        req.body = value;
        next();
    };
};

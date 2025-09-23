import Joi from 'joi';
import j2s from 'joi-to-swagger'; 

const authJoiSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
});

const { swagger: authSwaggerSchema } = j2s(authJoiSchema);

export { authJoiSchema, authSwaggerSchema };

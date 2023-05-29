import Joi from "joi";

export const CreateUserRequest = Joi.object({
  username: Joi.string().alphanum().required(),
  email: Joi.string().email().required(),
  password: Joi.string().alphanum().min(6).required(),
});

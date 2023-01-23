import Joi from "joi";
var bookModel = Joi.object({
    title: Joi.string().required(),
    author: Joi.string().required(),
    genre: Joi.string().required(),
    status: Joi.string().required()
});
export default bookModel;

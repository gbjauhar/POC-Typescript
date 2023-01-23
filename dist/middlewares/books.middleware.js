import bookModel from "../schemas/books.schemas.js";
export default function postBookValidation(req, res, next) {
    var error = bookModel.validate(req.body, { abortEarly: false }).error;
    if (error) {
        var err = error.details.map(function (detail) { return detail.message; });
        return res.status(422).send(err);
    }
    next();
}

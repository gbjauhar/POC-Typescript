import { Router } from "express"
import { createBook, deleteBook, getBooks, getByStatus, updateByStatus } from "../controllers/books.controllers.js"
import postBookValidation from "../middlewares/books.middleware.js"

const router = Router()

router.post("/books", postBookValidation, createBook)
router.get("/books", getBooks)
router.get("/books/status", getByStatus)
router.put("/books/:id/:status", updateByStatus)
router.delete("/books/:id", deleteBook)


export default router
import { Book } from './../protocols/book.js';
import { Request, Response } from "express"
import booksRepository from "../repositories/books.repository.js"

export async function createBook(req: Request, res: Response) {
    const { title, author, genre, status } = req.body as Book
    try {
        await booksRepository.create(title, author, genre, status)
        res.sendStatus(201)
    } catch (err) {
        res.sendStatus(500)
        console.log(err)
    }
}

export async function getBooks(req: Request, res: Response) {
    try {
        const { rows } = await booksRepository.retrieve()
        res.send(rows)
    } catch (err) {
        res.sendStatus(500)
        console.log(err)
    }
}

export async function getByStatus(req: Request, res: Response) {
    const { status } = req.query
    try {
        const { rows } = await booksRepository.retrieveByStatus(status.toString())
        res.send(rows)
    } catch (err) {
        res.sendStatus(500)
        console.log(err)
    }
}

export async function deleteBook(req: Request, res: Response) {
    const { id } = req.params
    try {
        await booksRepository.deleteById(Number(id))
        res.sendStatus(200)
    } catch (err) {
        res.sendStatus(500)
        console.log(err)
    }
}

export async function updateByStatus(req: Request, res: Response) {
    const { id, status } = req.params
    try {
        const teste = await booksRepository.update(Number(id), status)
        console.log(teste)
        res.sendStatus(200)
    } catch (err) {
        res.sendStatus(500)
        console.log(err)
    }
}
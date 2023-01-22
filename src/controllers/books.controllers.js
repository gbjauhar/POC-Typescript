import booksRepository from "../repositories/books.repository.js"

export async function createBook(req, res) {
    const { title, author, genre, status } = req.body
    try{
        await booksRepository.create(title, author, genre, status)
        res.sendStatus(201)
    }catch(err){
        res.sendStatus(500)
        console.log(err)
    }
}

export async function getBooks(req, res){
    try{
        const {rows} = await booksRepository.retrieve()
        res.send(rows)
    }catch(err){
        res.sendStatus(500)
        console.log(err)
    }
}

export async function getByStatus(req, res){
    const { status } = req.query
    try{
       const {rows} = await booksRepository.retrieveByStatus(status)
        res.send(rows)
    }catch(err){
        res.sendStatus(500)
        console.log(err)
    }
}

export async function deleteBook(req, res){
    const { id } = req.params
    try{
        await booksRepository.deleteById(id)
        res.sendStatus(200)
    }catch(err){
        res.sendStatus(500)
        console.log(err)
    }
}

export async function updateByStatus(req, res){
    const { id, status } = req.params
    try{
        await booksRepository.update(id, status)
        res.sendStatus(200)
    }catch(err){
        res.sendStatus(500)
        console.log(err)
    }
}
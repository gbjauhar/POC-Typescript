import { connection } from "../database/server.js"

export async function create(title, author, genre, status){
    return connection.query(`INSERT INTO books (title, author, genre, status) VALUES ($1, $2, $3, $4);`, [title, author, genre, status])
}

export async function retrieve(){
    return connection.query(`SELECT * FROM books;`)
}

export async function retrieveByStatus(status){
    return connection.query(`SELECT * FROM books WHERE status=$1;`, [status])
}

export async function update(id, status){
    return connection.query(`UPDATE books SET status=$1 WHERE id=$2;`, [status, id])
}
export async function deleteById(id){
    return connection.query(`DELETE FROM books WHERE id=$1;`,[id])
}
const booksRepository = {
    create,
    retrieve,
    retrieveByStatus,
    update,
    deleteById,
}

export default booksRepository;
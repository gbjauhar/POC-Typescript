import { Book } from './../protocols/book';
import { connection } from "../database/server.js"
import { QueryResult } from 'pg';

export async function create(title: string, author: string, genre: string, status: string): Promise<QueryResult<Object>> {
    return connection.query(`INSERT INTO books (title, author, genre, status) VALUES ($1, $2, $3, $4);`, [title, author, genre, status])
}

export async function retrieve(): Promise<QueryResult<Book>>{
    return connection.query(`SELECT * FROM books;`)
}

export async function retrieveByStatus(status: string): Promise<QueryResult<Book>>{
    return connection.query(`SELECT * FROM books WHERE status=$1;`, [status])
}

export async function update(id: number, status: string): Promise<QueryResult<Object>>{
    return connection.query(`UPDATE books SET status=$1 WHERE id=$2;`, [status, id])
}
export async function deleteById(id: number): Promise<QueryResult<Object>>{
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
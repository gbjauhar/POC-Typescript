# POC-Typescript
A simple project using Node, Express and Typescript where you can make a catalog of all your read and unread books

POST: /books
Body: { "title": "Crime and Punishment", "genre": "drama", "author": "Dostoevsky", "status": "read" }

GET: /books

GET: /books/status?status=unread

PUT: /books/:id/:status

DELETE: /books/:id

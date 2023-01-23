import express from "express"
import booksRouter from "./routes/books.routes.js"

const app = express();
app.use(express.json())
app.use(booksRouter)

  app.listen(4000, () =>
  console.log(`Server running in port: 4000`)
);
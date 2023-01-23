import pkg from "pg"
const { Pool } = pkg


export const connection = new Pool({
    connectionString: "postgres://postgres:266266@localhost:5432/booklog"
})
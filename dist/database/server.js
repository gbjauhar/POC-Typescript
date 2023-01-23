import pkg from "pg";
var Pool = pkg.Pool;
export var connection = new Pool({
    connectionString: "postgres://postgres:266266@localhost:5432/booklog"
});

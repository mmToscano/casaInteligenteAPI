const mysql = require("mysql")

const conexao = mysql.createConnection({
    host: "localhost", /* se o banco estiver, sei lá, no heroku, o caminho seria algo como app-hrk */
    port: 3306,
    user: "root",
    password: "",
    database: "amaz"
})

module.exports = conexao;
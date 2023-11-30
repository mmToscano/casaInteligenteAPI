const mysql = require("mysql")

const conexao = mysql.createConnection({
    host: "amazdatabaseunitri.couhvmcpkd04.us-east-2.rds.amazonaws.com", /* se o banco estiver, sei lá, no heroku, o caminho seria algo como app-hrk */
    port: 3306,
    user: "admin",
    password: "unitriamuni",
    database: "amaz"
})

module.exports = conexao;
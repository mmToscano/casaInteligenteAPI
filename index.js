const express = require("express");
const app = express();
const port = 9000;
const router = require("./routers/index");
const conexao = require("./infraestrutura/conexao");
const tabelas = require("./infraestrutura/tabelas");
var cors = require('cors')


router(app, express);
tabelas.init(conexao)
app.use(cors());


app.listen(port, (error) => {
    if(error) {
        console.log("Deu erro")
        return;
    }
    console.log("Subiu")
});
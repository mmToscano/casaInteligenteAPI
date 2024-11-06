const conexao = require("../infraestrutura/conexao")
//regras de negócio
class comodoModel {

    executaQuery(sql, parametros = "") {
        return new Promise((resolve, reject) => {
            conexao.query(sql, parametros, (error, resposta) => {
                if(error) {
                    return reject(error);
                }
                return resolve(resposta)
            })
        })
    }

    listar() {
        const sql = "SELECT * FROM COMODO";
        return this.executaQuery(sql)
    }
    criar(novoComodo) {
        const sql = "insert into COMODO set ?"
        return this.executaQuery(sql, novoComodo)
    }
    atualizar(comodoAtualizado, id) {
        const sql = "update COMODO set ? where ID_COMODO = ?"
        return this.executaQuery(sql, [comodoAtualizado, id])
    }
    deletar(id) {
        const sql = "delete from COMODO where ID_COMODO = ?"
        return this.executaQuery(sql, id)
    }
    deletarTudo() {
        const sql = "delete from COMODO"
        return this.executaQuery(sql)
    }
}

module.exports = new comodoModel();
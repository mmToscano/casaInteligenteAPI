const conexao = require("../infraestrutura/conexao")
//regras de negócio
class SementeModel {

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
        const sql = "SELECT * FROM sementes";
        return this.executaQuery(sql)
    }
    criar(novoSemente) {
        const sql = "insert into sementes set ?"
        return this.executaQuery(sql, novoSemente)
    }
    atualizar(sementeAtualizado, id) {
        const sql = "update sementes set ? where idsemente = ?"
        return this.executaQuery(sql, [sementeAtualizado, id])
    }
    deletar(id) {
        const sql = "delete from sementes where idsemente = ?"
        return this.executaQuery(sql, id)
    }
}

module.exports = new SementeModel();
const conexao = require("../infraestrutura/conexao")
//regras de negócio
class GrupoModel {

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
        const sql = "SELECT * FROM grupos";
        return this.executaQuery(sql)
    }
    criar(novoGrupo) {
        const sql = "insert into grupos set ?"
        return this.executaQuery(sql, novoGrupo)
    }
    atualizar(grupoAtualizado, id) {
        const sql = "update grupos set ? where id = ?"
        return this.executaQuery(sql, [grupoAtualizado, id])
    }
    deletar(id) {
        const sql = "delete from grupos where id = ?"
        return this.executaQuery(sql, id)
    }
}

module.exports = new GrupoModel();
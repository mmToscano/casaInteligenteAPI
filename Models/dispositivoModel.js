const conexao = require("../infraestrutura/conexao")
//regras de negócio
class dispositivoModel {

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
        const sql = "SELECT * FROM dispositivo";
        return this.executaQuery(sql)
    }
    criar(novoDispositivo) {
        const sql = "insert into dispositivo set ?"
        return this.executaQuery(sql, novoDispositivo)
    }
    atualizar(dispositivoAtualizado, id) {
        const sql = "update dispositivo set ? where id_disp = ?"
        return this.executaQuery(sql, [dispositivoAtualizado, id])
    }
    deletar(id) {
        const sql = "delete from dispositivo where id_disp = ?"
        return this.executaQuery(sql, id)
    }
    deletarTudo() {
        const sql = "delete from dispositivo"
        return this.executaQuery(sql)
    }
}

module.exports = new dispositivoModel();
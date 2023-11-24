const conexao = require("../infraestrutura/conexao")
//regras de negócio
class PedidoModel {

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
        const sql = "SELECT * FROM pedidos";
        return this.executaQuery(sql)
    }
    criar(novoPedido) {
        const sql = "insert into pedidos set ?"
        return this.executaQuery(sql, novoPedido)
    }
    atualizar(pedidoAtualizado, id) {
        const sql = "update pedidos set ? where id = ?"
        return this.executaQuery(sql, [pedidoAtualizado, id])
    }
    deletar(id) {
        const sql = "delete from pedidos where id = ?"
        return this.executaQuery(sql, id)
    }
}

module.exports = new PedidoModel();
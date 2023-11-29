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
    criarVarios(novosPedidos) {
        for (let index = 0; index < novosPedidos.length; index++) {
            const sql = "insert into pedidos set ?"
            conexao.query(sql, novosPedidos[index]);
        }

    }
    atualizar(pedidoAtualizado, id) {
        const sql = "update pedidos set ? where idpedido = ?"
        return this.executaQuery(sql, [pedidoAtualizado, id])
    }
    deletar(id) {
        const sql = "delete from pedidos where idpedido = ?"
        return this.executaQuery(sql, id)
    }
}

module.exports = new PedidoModel();
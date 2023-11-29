//realmente, nós escrevemos os métodos do mysql aqui mesmo. Eu acho que esses bancos servem
//REALMENTE apenas para guardar informações. Quando for fazer uma consulta ou deleção ou qualquer coisa, é 
//feito por aqui

const pedidoModel = require("../Models/pedidosModel")

class PedidoController {

    buscar(req, res) {
        res.set('Access-Control-Allow-Origin', '*')
        const listaPedidos = pedidoModel.listar();
        return listaPedidos.then(pedidos => res.status(200).json(pedidos))
        .catch(error => res.status(400).json(error.message()))
    }

    criar(req, res) {
        res.set('Access-Control-Allow-Origin', '*')
        const novoPedido = req.body;
        const pedido = pedidoModel.criar(novoPedido);
        return pedido.then(pedidoCriado => res.status(201).json(pedidoCriado))
        .catch((error) => res.status(400).json(error.message()))
    }

    criarVarios(req, res) {
        res.set('Access-Control-Allow-Origin', '*')
        const novoPedido = req.body;
        const pedido = pedidoModel.criar(novoPedido);
        return pedido.then(pedidoCriado => res.status(201).json(pedidoCriado))
        .catch((error) => res.status(400).json(error.message()))
    }

    alterar(req, res) {
        res.set('Access-Control-Allow-Origin', '*')
        const {id} = req.params;
        const pedidoAtualizado = req.body;
        const pedido = pedidoModel.atualizar(pedidoAtualizado, id);
        pedido.then(resultPedidoAtualizado => res.status(200).json(resultPedidoAtualizado))
        .catch((error) => res.status(400).json(error))
    }

    apagar(req, res) {
        res.set('Access-Control-Allow-Origin', '*')
        const {id} = req.params;
        const pedido = pedidoModel.deletar(id);
        pedido.then(resultPedidoDeletado => res.status(200).json(resultPedidoDeletado))
        .catch((error) => res.status(400).json(error))
    }
}

module.exports = new PedidoController();
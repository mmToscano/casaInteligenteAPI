//realmente, nós escrevemos os métodos do mysql aqui mesmo. Eu acho que esses bancos servem
//REALMENTE apenas para guardar informações. Quando for fazer uma consulta ou deleção ou qualquer coisa, é 
//feito por aqui

const carrinhoModel = require("../Models/carrinhosModel")

class CarrinhoController {

    buscar(req, res) {
        res.set('Access-Control-Allow-Origin', '*')
        const listaCarrinhos = carrinhoModel.listar();
        return listaCarrinhos.then(carrinhos => res.status(200).json(carrinhos))
        .catch(error => res.status(400).json(error))
    }

    criar(req, res) {
        res.set('Access-Control-Allow-Origin', '*')
        const novoCarrinho = req.body;
        const carrinho = carrinhoModel.criar(novoCarrinho);
        return carrinho.then(carrinhoCriado => res.status(201).json(carrinhoCriado))
        .catch((error) => res.status(400).json(error))
    }

    alterar(req, res) {
        res.set('Access-Control-Allow-Origin', '*')
        const {id} = req.params;
        const carrinhoAtualizado = req.body;
        const carrinho = carrinhoModel.atualizar(carrinhoAtualizado, id);
        carrinho.then(resultCarrinhoAtualizado => res.status(200).json(resultCarrinhoAtualizado))
        .catch((error) => res.status(400).json(error))
    }

    apagar(req, res) {
        res.set('Access-Control-Allow-Origin', '*')
        const {id} = req.params;
        const carrinho = carrinhoModel.deletar(id);
        carrinho.then(resultCarrinhoDeletado => res.status(200).json(resultCarrinhoDeletado))
        .catch((error) => res.status(400).json(error))
    }
}

module.exports = new CarrinhoController();
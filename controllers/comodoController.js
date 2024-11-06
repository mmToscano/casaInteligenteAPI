const comodoModel = require("../Models/comodoModel")

class comodoController {

    buscar(req, res) {
        res.set('Access-Control-Allow-Origin', '*')
        const listaComodos = comodoModel.listar();
        return listaComodos.then(comodo => res.status(200).json(comodo))
        .catch(error => res.status(400).json(error))
    }
    
    criar(req, res) {
        res.set('Access-Control-Allow-Origin', '*')
        const novoComodo = req.body;
        const comodo = comodoModel.criar(novoComodo);
        return comodo.then(comodoCriado => res.status(201).json(comodoCriado))
        .catch((error) => res.status(400).json(error))
    }

    alterar(req, res) {
        res.set('Access-Control-Allow-Origin', '*')
        const {id} = req.params;
        const comodoAtualizado = req.body;
        const comodo = comodoModel.atualizar(comodoAtualizado, id);
        comodo.then(resultComodoAtualizado => res.status(200).json(resultComodoAtualizado))
        .catch((error) => res.status(400).json(error))
    }

    apagar(req, res) {
        res.set('Access-Control-Allow-Origin', '*')
        const {id} = req.params;
        const comodo = comodoModel.deletar(id);
        comodo.then(resultComodoDeletado => res.status(200).json(resultComodoDeletado))
        .catch((error) => res.status(400).json(error))
    }

    apagarTudo(req, res) {
        res.set('Access-Control-Allow-Origin', '*')
        const comodo = comodoModel.deletarTudo();
        comodo.then(resultComodosDeletados => res.status(200).json(resultComodosDeletados))
        .catch((error) => res.status(400).json(error))
    }
}

module.exports = new comodoController();
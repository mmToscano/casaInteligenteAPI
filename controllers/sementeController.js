//realmente, nós escrevemos os métodos do mysql aqui mesmo. Eu acho que esses bancos servem
//REALMENTE apenas para guardar informações. Quando for fazer uma consulta ou deleção ou qualquer coisa, é 
//feito por aqui

const sementeModel = require("../Models/sementesModel")

class SementeController {

    buscar(req, res) {
        res.set('Access-Control-Allow-Origin', '*')
        const listaSementes = sementeModel.listar();
        return listaSementes.then(sementes => res.status(200).json(sementes))
        .catch(error => res.status(400).json(error.message()))
    }

    criar(req, res) {
        res.set('Access-Control-Allow-Origin', '*')
        const novoSemente = req.body;
        const semente = sementeModel.criar(novoSemente);
        return semente.then(sementeCriado => res.status(201).json(sementeCriado))
        .catch((error) => res.status(400).json(error.message()))
    }

    alterar(req, res) {
        res.set('Access-Control-Allow-Origin', '*')
        const {id} = req.params;
        const sementeAtualizado = req.body;
        const semente = sementeModel.atualizar(sementeAtualizado, id);
        semente.then(resultSementeAtualizado => res.status(200).json(resultSementeAtualizado))
        .catch((error) => res.status(400).json(error))
    }

    apagar(req, res) {
        res.set('Access-Control-Allow-Origin', '*')
        const {id} = req.params;
        const semente = sementeModel.deletar(id);
        semente.then(resultSementeDeletado => res.status(200).json(resultSementeDeletado))
        .catch((error) => res.status(400).json(error))
    }
}

module.exports = new SementeController();
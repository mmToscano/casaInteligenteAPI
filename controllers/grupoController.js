//realmente, nós escrevemos os métodos do mysql aqui mesmo. Eu acho que esses bancos servem
//REALMENTE apenas para guardar informações. Quando for fazer uma consulta ou deleção ou qualquer coisa, é 
//feito por aqui

const grupoModel = require("../Models/gruposModel")

class GrupoController {

    buscar(req, res) {
        res.set('Access-Control-Allow-Origin', '*')
        const listaGrupos = grupoModel.listar();
        return listaGrupos.then(grupos => res.status(200).json(grupos))
        .catch(error => res.status(400).json(error.message()))
    }

    criar(req, res) {
        res.set('Access-Control-Allow-Origin', '*')
        const novoGrupo = req.body;
        const grupo = grupoModel.criar(novoGrupo);
        return grupo.then(grupoCriado => res.status(201).json(grupoCriado))
        .catch((error) => res.status(400).json(error.message()))
    }

    alterar(req, res) {
        res.set('Access-Control-Allow-Origin', '*')
        const {id} = req.params;
        const grupoAtualizado = req.body;
        const grupo = grupoModel.atualizar(grupoAtualizado, id);
        grupo.then(resultGrupoAtualizado => res.status(200).json(resultGrupoAtualizado))
        .catch((error) => res.status(400).json(error))
    }

    apagar(req, res) {
        res.set('Access-Control-Allow-Origin', '*')
        const {id} = req.params;
        const grupo = grupoModel.deletar(id);
        grupo.then(resultGrupoDeletado => res.status(200).json(resultGrupoDeletado))
        .catch((error) => res.status(400).json(error))
    }
}

module.exports = new GrupoController();
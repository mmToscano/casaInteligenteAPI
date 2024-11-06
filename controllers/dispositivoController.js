const dispositivoModel = require("../Models/dispositivoModel")

class dispositivoController {

    buscar(req, res) {
        res.set('Access-Control-Allow-Origin', '*')
        const listaDispositivos = dispositivoModel.listar();
        return listaDispositivos.then(dispositivo => res.status(200).json(dispositivo))
        .catch(error => res.status(400).json(error))
    }
    
    criar(req, res) {
        res.set('Access-Control-Allow-Origin', '*')
        const novoDispositivo = req.body;
        const dispositivo = dispositivoModel.criar(novoDispositivo);
        return dispositivo.then(dispositivoCriado => res.status(201).json(dispositivoCriado))
        .catch((error) => res.status(400).json(error))
    }

    alterar(req, res) {
        res.set('Access-Control-Allow-Origin', '*')
        const {id} = req.params;
        const dispositivoAtualizado = req.body;
        const dispositivo = dispositivoModel.atualizar(dispositivoAtualizado, id);
        dispositivo.then(resultDispositivoAtualizado => res.status(200).json(resultDispositivoAtualizado))
        .catch((error) => res.status(400).json(error))
    }

    apagar(req, res) {
        res.set('Access-Control-Allow-Origin', '*')
        const {id} = req.params;
        const dispositivo = dispositivoModel.deletar(id);
        dispositivo.then(resultDispositivoDeletado => res.status(200).json(resultDispositivoDeletado))
        .catch((error) => res.status(400).json(error))
    }

    apagarTudo(req, res) {
        res.set('Access-Control-Allow-Origin', '*')
        const dispositivo = dispositivoModel.deletarTudo();
        dispositivo.then(resultDispositivosDeletados => res.status(200).json(resultDispositivosDeletados))
        .catch((error) => res.status(400).json(error))
    }
}

module.exports = new dispositivoController();
const routerCarrinho = require("./carrinhoRoute")
const routerGrupo = require("./grupoRoute")
const routerPedido = require("./pedidoRoute")
const routerSemente = require("./sementeRoute")

module.exports = (app, express) => {
    app.use(express.json());
    app.use(express.urlencoded({extended: true}))
    app.use([routerCarrinho, routerGrupo, routerPedido,routerSemente]);
    //app.use(routerCliente);
}
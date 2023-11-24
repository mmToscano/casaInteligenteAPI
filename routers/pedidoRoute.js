const { Router } = require("express");
const router = Router();
const pedidoController = require("../controllers/pedidoController");

//get, post, put, delete

router.get("/pedidos", pedidoController.buscar);

router.post("/pedidos", pedidoController.criar)

router.put("/pedido/:id", pedidoController.alterar)

router.delete("/pedido/:id", pedidoController.apagar)

module.exports = router;
const { Router } = require("express");
const router = Router();
const carrinhoController = require("../controllers/carrinhoController");

//get, post, put, delete

router.get("/carrinhos", carrinhoController.buscar);

router.post("/carrinhos", carrinhoController.criar)

router.put("/carrinho/:id", carrinhoController.alterar)

router.delete("/carrinho/:id", carrinhoController.apagar)

router.delete("/carrinhoTudo", carrinhoController.apagarTudo)

module.exports = router;
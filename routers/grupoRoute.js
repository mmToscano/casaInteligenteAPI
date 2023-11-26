const { Router } = require("express");
const router = Router();
const grupoController = require("../controllers/grupoController");

//get, post, put, delete

router.get("/gruposESementes", grupoController.buscarPorGrupos);

router.get("/grupos", grupoController.buscar)

router.post("/grupos", grupoController.criar)

router.put("/grupo/:id", grupoController.alterar)

router.delete("/grupo/:id", grupoController.apagar)

module.exports = router;
const { Router } = require("express");
const router = Router();
const comodoController = require("../controllers/comodoController");

//get, post, put, delete

router.get("/comodos", comodoController.buscar);

router.post("/comodos", comodoController.criar)

router.put("/comodo/:id", comodoController.alterar)

router.delete("/comodo/:id", comodoController.apagar)

router.delete("/comodoTudo", comodoController.apagarTudo)

module.exports = router;
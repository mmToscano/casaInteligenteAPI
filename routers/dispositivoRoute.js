const { Router } = require("express");
const router = Router();
const dispositivoController = require("../controllers/dispositivoController");

//get, post, put, delete

router.get("/dispositivos", dispositivoController.buscar);

router.post("/dispositivos", dispositivoController.criar)

router.put("/dispositivo/:id", dispositivoController.alterar)

router.delete("/dispositivo/:id", dispositivoController.apagar)

router.delete("/dispositivoTudo", dispositivoController.apagarTudo)

module.exports = router;
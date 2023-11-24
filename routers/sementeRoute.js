const { Router } = require("express");
const router = Router();
const sementeController = require("../controllers/sementeController");

//get, post, put, delete

router.get("/sementes", sementeController.buscar);

router.post("/sementes", sementeController.criar)

router.put("/semente/:id", sementeController.alterar)

router.delete("/semente/:id", sementeController.apagar)

module.exports = router;
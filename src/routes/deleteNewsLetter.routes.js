const router = require("express").Router();

const deleteNewsLetter = require("../controllers/deleteNewsLetter");

router.delete("/:id", deleteNewsLetter);

module.exports = router;

const router = require("express").Router();

const updateNews = require("../controllers/updateNewsLetter");

router.patch("/:id", updateNews);

module.exports = router;

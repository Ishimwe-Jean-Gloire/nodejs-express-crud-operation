const router = require("express").Router();

const getNewsById = require("../controllers/viewLetterById");

router.get("/:paramid", getNewsById);

module.exports = router;

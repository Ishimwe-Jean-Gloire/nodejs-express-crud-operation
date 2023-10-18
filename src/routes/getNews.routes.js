const router = require("express").Router();
const getNews = require("../controllers/viewLetter");
router.get("/", getNews);
module.exports = router;

const router = require("express").Router();
const addNews = require("../controllers/newsLetter");
const getNews = require("../controllers/viewLetter");
router.post("/", addNews);
router.get("/", getNews);
module.exports = router;

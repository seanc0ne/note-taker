var path = require("path");
var router = require("express").Router();

router.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

router.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

module.exports = router;
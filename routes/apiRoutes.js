const path = require("path");
const router = require("express").Router();

router.get("/notes", function (req, res) {
    store
        .getnotes()
        .then(notes => res.json(notes))
        .catch(err => res.status(500).json(err));
});
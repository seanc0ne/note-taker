const path = require("path");
const router = require("express").Router();

router.get("/notes", function (req, res) {
    store
        .getnotes()
        .then(notes => res.json(notes))
        .catch(err => res.status(500).json(err));
});

router.post("/notes", (req,res) => {
    store
        .addNote(req.body)
        .then((note) => res.json(note))
        .catch(err => res.status(500).json(err));
});

router.delete("/notes/:id", function(req, res) {
    store
        .removeNote(req.params.id)
        .then(() => res.json({ ok: true}))
        .catch(err => res.status(500).json(err));
});

module.exports = router;
const express = require("express");
const router = express.Router();

let players = require("../dummyDatabase");

// Will send GET request to list out all the "players"
router.get("/list", async (req, res) => {
    try {
        res.status(200).json({
            data: players
        });
    } catch (err) {
        res.status(400).json({
            message: "Some Error Occured",
            err
        })
    }
})

// Will send GET request to list player details 
router.get("/list/:id", async (req, res) => {
    let { id } = req.params;
    id = Number(id);
    try {
        let player = players.find(player => player._id === id);
        res.status(200).json({
            data: player
        });
    } catch (err) {
        res.status(400).json({
            message: "Some error occured",
            err
        });
    }
});

module.exports = router;
var express = require("express");

var router = express.Router();

var bur = require("../models/burger.js");

router.get("/", function(req, res) {
bur.all(function(data) {
    var obj = {
        burgers: data
    };
    console.log(obj);
    res.render("index", obj);
});
});

router.post("/api/burgers",function(req,res){
    bur.create(["title", "eaten"], [req.body.title], (result) => {
        res.json({id: result.insertId});
    });
});

router.put("/api/bugers/:id", (req, res) =>{
    var condition = "id = " + req.params.id;
    bur.updateOne(condition, (result) => {
        if (result.changedRows === 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});
module.exports = router;

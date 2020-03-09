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
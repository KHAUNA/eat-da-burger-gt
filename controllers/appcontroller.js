var express = require("express");
var router = express.Router();
var orm = require("../config/orm")


router.get("/", function(req, res) {
    orm.selectAll(function(err, data){
        if (err) {
            return res.json("Appcontroller Error")
        }
        res.render("index", {data})
    })
});
router.post("/add", function(req, res){
    var burgerName = req.body.burger_name
    orm.addBurger(burgerName, function(err, data){
        if (err) {
            return res.json("Appcontroller Error")  
        }
        return res.json({
            burger_name: burgerName,
            id: data.insertID,
            devoured: false
        });
    });
});



module.exports = router;
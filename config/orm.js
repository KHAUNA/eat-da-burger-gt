var connection = require("../config/connection.js");

// * `selectAll()`
// * `insertOne()`
// * `updateOne()`

var orm = {
    selectAll: function(cb) {
        connection.query("SELECT * FROM burgers",
        function (err, resp){
            if (err) cb(err, null);
            cb(null, resp);
        });
    },
    addBurger: function(burger_name, cb){
        connection.query(
            "INSERT INTO burgers (burger_name) VALUES ?",
            [burger_name],
            function(err, resp) {
                if (err) cb(err, null);
                cb(null, resp);
            }
        )
    }
}

module.exports = orm;
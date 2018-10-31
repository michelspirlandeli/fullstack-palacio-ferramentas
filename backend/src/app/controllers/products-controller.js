const restify    = require('restify');
const database   = require('../../config/database/database');
const connection = require('../../config/server');

const get = ('/products', (req, res) => {
    connection.query('SELECT * FROM produtos', (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err)
    })
});

module.exports = {
     get
}
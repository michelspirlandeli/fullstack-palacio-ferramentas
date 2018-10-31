const restify = require('restify');
const connection = require('../../config/database/database');

const get = ('/products', (req, res) => {
    connection.query('SELECT * FROM produtos', (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err)
    })
});




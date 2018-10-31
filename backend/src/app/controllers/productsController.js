const restify    = require('restify');
const database = require('../../config/database/database');


//Get all products
const get = ('/products', (req, res) => {
    database.query('SELECT * FROM produtos', (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err)
    })
});


//Get an  products
const getById = ('/products/admin/:id', (req, res) => {
    database.query('SELECT * FROM produtos WHERE idproduto = ?', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
});

//Delete an products
const remover = ('/products/:id', (req, res) => {
    database.query('DELETE FROM produtos WHERE idproduto = ?', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.send('Deleted successfully.');
        else
            console.log(err);
    })
});

//Insert an products


//Update an products


module.exports = {
     get, getById, remover, post
}